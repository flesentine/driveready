/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { DashboardView } from './components/DashboardView';
import { PracticeQuizView } from './components/PracticeQuizView';
import { StatsView } from './components/StatsView';
import { SignLibraryView } from './components/SignLibraryView';
import { FlashcardsView } from './components/FlashcardsView';
import { ProfileView } from './components/ProfileView';
import { MistakeReviewView } from './components/MistakeReviewView';
import { getMistakeReviewQuestions, getCramModeQuestions } from './utils/mistakeReview';
import { isProPassUnlocked } from './utils/proPass';
import { PRACTICE_TESTS, isPracticeTestUnlocked } from './utils/monetization';
import { ProPassModal } from './components/ProPassModal';
import { TabType, UserStats, Question, getUserLevelInfo } from './types';
import { calculateNewReadinessScore, mapQuestionCategoryToScoreKey, getReadinessLabel } from './utils/scoring';
import { ROAD_SIGNS, PRACTICE_QUESTIONS, INITIAL_USER_STATS } from './data';
import { ClipboardList, ShieldAlert, Award, FileText, CheckCircle2, X, Home, BookOpen, Zap, TrendingUp, User, Flame, Trophy, Lock, Sparkles } from 'lucide-react';

const LOCAL_STORAGE_STATS_KEY = 'driveready_user_stats';

const computeReadinessScore = (stats: UserStats): number => {
  return calculateNewReadinessScore(stats);
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [stats, setStats] = useState<UserStats>(INITIAL_USER_STATS);
  
  // Pro Pass Lock & Purchase controllers
  const [proPassUnlocked, setProPassUnlocked] = useState<boolean>(() => isProPassUnlocked());
  const [showProPassModal, setShowProPassModal] = useState<boolean>(false);

  // Active quiz / flashcard controllers
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isFlashcardsActive, setIsFlashcardsActive] = useState(false);
  const [activeSignId, setActiveSignId] = useState<string | null>(null);
  const [activeTestGroup, setActiveTestGroup] = useState<number>(12);
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<Question[]>([]);
  const [isReviewQuiz, setIsReviewQuiz] = useState(false);
  const [isCramModeQuiz, setIsCramModeQuiz] = useState(false);

  // UI state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [quizNotification, setQuizNotification] = useState<{ text: string; isPassing: boolean } | null>(null);
  
  // Profile selection triggers Profile View inside active tabs context
  const [isProfileTabActive, setIsProfileTabActive] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);

  // Initialize and load persistent user stats
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_STATS_KEY);
    const todayStr = new Date().toDateString();
    
    if (saved) {
      try {
        let parsed = JSON.parse(saved);

        // --- LOCAL STORAGE MIGRATION ---
        // If the user has no recorded actual activity, but has non-zero stats, reset to clean INITIAL_USER_STATS
        if (!parsed.hasActualActivity && (parsed.readinessScore > 0 || parsed.totalTestsTaken > 0 || parsed.practiceTimeMin > 0 || parsed.accuracyPercent > 0 || parsed.masteredSignsCount > 0)) {
          parsed = {
            ...INITIAL_USER_STATS,
            testDaysLeft: parsed.testDaysLeft,
            userName: parsed.userName || INITIAL_USER_STATS.userName
          };
        }

        if (parsed.testDaysLeft === 12) {
          delete parsed.testDaysLeft;
        }
        if (typeof parsed.masteredSignsCount !== 'number') {
          parsed.masteredSignsCount = parsed.totalTestsTaken > 0 ? Math.min(Math.round(parsed.totalTestsTaken * 1.6), 24) : 0;
        }

        // --- NEW DAY RESET LOGIC ---
        if (parsed.lastActiveDate) {
          if (parsed.lastActiveDate !== todayStr) {
            // It's a brand new day! Reset daily goals answered questions count
            parsed.questionsAnsweredToday = 0;

            // Check if user missed more than 1 day to reset their daily streak
            const lastActiveTime = new Date(parsed.lastActiveDate).getTime();
            const todayTime = new Date(todayStr).getTime();
            const diffMs = todayTime - lastActiveTime;
            const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

            if (diffDays > 1) {
              parsed.streakDays = 0; // Streak broken
            }
            
            parsed.lastActiveDate = todayStr;
          }
        } else {
          // If profile first updates to this release, stamp today without clearing preset stats
          parsed.lastActiveDate = todayStr;
        }

        // Recalculate readiness and rank dynamically to apply the latest scoring helper
        parsed.readinessScore = calculateNewReadinessScore(parsed);
        const lvlInfo = getUserLevelInfo(parsed);
        parsed.rankText = `Level ${lvlInfo.level}: ${lvlInfo.levelName}`;

        localStorage.setItem(LOCAL_STORAGE_STATS_KEY, JSON.stringify(parsed));
        setStats(parsed);
      } catch (e) {
        console.error('Failed parse saved stats', e);
      }
    } else {
      // First time initialization in browser
      const defaultStats = {
        ...INITIAL_USER_STATS,
        lastActiveDate: todayStr
      };
      setStats(defaultStats);
      localStorage.setItem(LOCAL_STORAGE_STATS_KEY, JSON.stringify(defaultStats));
    }
  }, []);

  // Scroll to top of the window on view transitions (changing tabs, entering quiz, etc.)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [currentTab, isQuizActive, isFlashcardsActive, isProfileTabActive]);

  const saveStats = (newStats: UserStats) => {
    const recalculatedScore = computeReadinessScore(newStats);
    // Determine level info dynamically based on updated scores
    const tempStatsForLvl = {
      ...newStats,
      readinessScore: recalculatedScore
    };
    const lvlInfo = getUserLevelInfo(tempStatsForLvl);
    const levelStr = `Level ${lvlInfo.level}: ${lvlInfo.levelName}`;
    const todayStr = new Date().toDateString();
    const updatedStats = { 
      ...newStats, 
      readinessScore: recalculatedScore, 
      rankText: levelStr,
      lastActiveDate: newStats.lastActiveDate || todayStr
    };
    setStats(updatedStats);
    localStorage.setItem(LOCAL_STORAGE_STATS_KEY, JSON.stringify(updatedStats));
  };

  const handleStartPracticeQuiz = (testGroup?: number) => {
    const group = (typeof testGroup === 'number') ? testGroup : 12;
    if (!isPracticeTestUnlocked(group, proPassUnlocked)) {
      setShowProPassModal(true);
      return;
    }
    setActiveTestGroup(group);

    // Filter questions that belong to this test group
    const filteredQuestions = PRACTICE_QUESTIONS.filter(q => q.testGroup === group);
    setActiveQuizQuestions(filteredQuestions.length > 0 ? filteredQuestions : PRACTICE_QUESTIONS.slice(0, 10));

    setIsReviewQuiz(false); // Reset review mode
    setIsCramModeQuiz(false);
    setIsQuizActive(true);
    setIsFlashcardsActive(false);
    setIsSidebarOpen(false);
    setQuizNotification(null);
  };

  const handleStartMistakeReview = () => {
    const reviewQuestions = getMistakeReviewQuestions(proPassUnlocked);
    if (reviewQuestions.length === 0) return;

    setActiveQuizQuestions(reviewQuestions);
    setIsReviewQuiz(true);
    setIsCramModeQuiz(false);
    setIsQuizActive(true);
    setIsFlashcardsActive(false);
    setIsSidebarOpen(false);
    setQuizNotification(null);
  };

  const handleStartCramMode = () => {
    if (!proPassUnlocked) {
      setShowProPassModal(true);
      return;
    }

    const cramQuestions = getCramModeQuestions(stats, PRACTICE_QUESTIONS);
    if (cramQuestions.length === 0) return;

    setActiveQuizQuestions(cramQuestions);
    setIsCramModeQuiz(true);
    setIsReviewQuiz(false);
    setIsQuizActive(true);
    setIsFlashcardsActive(false);
    setIsSidebarOpen(false);
    setQuizNotification(null);
  };

  const handleStartFlashcards = () => {
    setIsFlashcardsActive(true);
    setIsQuizActive(false);
    setActiveSignId(null);
    setIsSidebarOpen(false);
    setQuizNotification(null);
  };

  const handleGoToFlashcardsForSign = (signId: string) => {
    setIsFlashcardsActive(true);
    setIsQuizActive(false);
    setActiveSignId(signId);
    setIsSidebarOpen(false);
    setQuizNotification(null);
  };

  const handleCompleteQuiz = (
    correct: number, 
    total: number, 
    results?: { question: Question; isCorrect: boolean }[]
  ) => {
    const accuracy = Math.round((correct / total) * 100);
    
    if (isReviewQuiz) {
      const isPassing = accuracy >= 70;
      let notificationText = '';
      if (accuracy === 100) {
        notificationText = `Mistake Review Perfected! You answered all ${total} of your reviewed mistakes correctly. Your mistake log is looking clean, great job!`;
      } else {
        notificationText = `Mistake Review completed! You answered ${correct} out of ${total} mistakes correctly (${accuracy}%). Correctly answered questions have been marked as resolved! Go back to Mistake Review to drill the rest of your incorrect answers.`;
      }
      setIsReviewQuiz(false); // reset review state
      
      const todayStr = new Date().toDateString();
      const updatedStats = {
        ...stats,
        questionsAnsweredToday: stats.questionsAnsweredToday + total,
        hasActualActivity: true,
        streakDays: stats.streakDays + (stats.questionsAnsweredToday === 0 ? 1 : 0),
        lastActiveDate: stats.lastActiveDate || todayStr
      };

      setStats(updatedStats);
      localStorage.setItem(LOCAL_STORAGE_STATS_KEY, JSON.stringify(updatedStats));

      setIsQuizActive(false);
      setQuizNotification({
        text: notificationText,
        isPassing
      });
      setCurrentTab('home');
      return;
    }

    if (isCramModeQuiz) {
      setIsCramModeQuiz(false); // reset cram state
      
      const todayStr = new Date().toDateString();
      const updatedStats = {
        ...stats,
        questionsAnsweredToday: stats.questionsAnsweredToday + total,
        hasActualActivity: true,
        streakDays: stats.streakDays + (stats.questionsAnsweredToday === 0 ? 1 : 0),
        lastActiveDate: stats.lastActiveDate || todayStr
      };

      setStats(updatedStats);
      localStorage.setItem(LOCAL_STORAGE_STATS_KEY, JSON.stringify(updatedStats));

      setIsQuizActive(false);
      setQuizNotification({
        text: `Cram Mode complete! You reviewed ${total} high-impact questions. Great work — you focused on your highest-priority weak spots.`,
        isPassing: true
      });
      setCurrentTab('home');
      return;
    }
    
    // Calculate new averages
    const currentTotalTests = stats.totalTestsTaken;
    const newTotalTests = currentTotalTests + 1;
    const currentAccuracy = stats.accuracyPercent;
    const averagedAccuracy = Math.round((currentAccuracy * currentTotalTests + accuracy) / newTotalTests);

    // Save attempt history
    const currentAttempts = stats.quizAttempts || [];
    const updatedAttempts = [...currentAttempts, { correct, total, accuracy, timestamp: Date.now() }];

    // Category progress scores adjustments based on actual question category correctness!
    const catTotal: { [key in 'rulesOfRoad' | 'signsSignals' | 'safeDriving']: number } = {
      rulesOfRoad: 0,
      signsSignals: 0,
      safeDriving: 0
    };
    const catCorrect: { [key in 'rulesOfRoad' | 'signsSignals' | 'safeDriving']: number } = {
      rulesOfRoad: 0,
      signsSignals: 0,
      safeDriving: 0
    };

    if (results && results.length > 0) {
      results.forEach(res => {
        const key = mapQuestionCategoryToScoreKey(res.question.category);
        catTotal[key]++;
        if (res.isCorrect) {
          catCorrect[key]++;
        }
      });
    } else {
      // Fallback
      const keyDefault = 'rulesOfRoad';
      catTotal[keyDefault] = total;
      catCorrect[keyDefault] = correct;
    }

    const currentCategoryScores = stats.categoryScores || { rulesOfRoad: 0, signsSignals: 0, safeDriving: 0 };
    const nextCategoryScores = { ...currentCategoryScores };

    (Object.keys(catTotal) as Array<'rulesOfRoad' | 'signsSignals' | 'safeDriving'>).forEach(key => {
      if (catTotal[key] > 0) {
        const catAccuracy = Math.round((catCorrect[key] / catTotal[key]) * 100);
        const oldScore = currentCategoryScores[key] || 0;
        if (oldScore === 0) {
          nextCategoryScores[key] = catAccuracy;
        } else {
          nextCategoryScores[key] = Math.max(0, Math.min(100, Math.round(oldScore * 0.6 + catAccuracy * 0.4)));
        }
      }
    });

    const interimStats: UserStats = {
      ...stats,
      questionsAnsweredToday: stats.questionsAnsweredToday + total,
      totalTestsTaken: newTotalTests,
      accuracyPercent: averagedAccuracy,
      readinessScore: stats.readinessScore, // Will be overridden in saveStats
      practiceTimeMin: stats.practiceTimeMin + 15, // add simulated duration
      streakDays: stats.streakDays + (stats.questionsAnsweredToday === 0 ? 1 : 0), // Increment streak if first active test today
      hasActualActivity: true,
      quizAttempts: updatedAttempts,
      categoryScores: nextCategoryScores
    };

    const finalScore = computeReadinessScore(interimStats);
    const newStats = { ...interimStats, readinessScore: finalScore };

    const isPassing = accuracy >= 70;
    let notificationText = '';
    if (isPassing) {
      if (accuracy === 100) {
        notificationText = `Flawless execution! You scored 100% on Practice Test ${activeTestGroup - 11}! Your exam readiness is now ${finalScore}%. You are exceptionally prepared!`;
      } else {
        notificationText = `Congratulations! You passed Practice Test ${activeTestGroup - 11} with ${correct} out of ${total} correct (${accuracy}%). Your exam readiness is now ${finalScore}%!`;
      }
    } else {
      notificationText = `Practice Test ${activeTestGroup - 11} completed, but you did not pass yet. You got ${correct} out of ${total} correct (${accuracy}%). Target at least 70% to pass. Your exam readiness is ${finalScore}%. Keep studying!`;
    }

    saveStats(newStats);
    setIsQuizActive(false);
    setQuizNotification({
      text: notificationText,
      isPassing
    });
    setCurrentTab('home');
  };

  const handleMasteredCard = () => {
    const totalSignsCount = ROAD_SIGNS ? ROAD_SIGNS.length : 24;
    const interimStats: UserStats = {
      ...stats,
      questionsAnsweredToday: stats.questionsAnsweredToday + 1,
      masteredSignsCount: Math.min((stats.masteredSignsCount || 0) + 1, totalSignsCount),
      hasActualActivity: true,
      categoryScores: {
        ...stats.categoryScores,
        signsSignals: Math.min(stats.categoryScores.signsSignals + 3, 100), // Boost Weakest signs area
      }
    };
    saveStats(interimStats);
  };

  const handleChangeTestDays = (days: number | undefined) => {
    const newStats: UserStats = {
      ...stats,
      testDaysLeft: days,
    };
    if (days === undefined) {
      delete newStats.testDaysLeft;
    }
    saveStats(newStats);
  };

  const handleResetStats = () => {
    const defaultStats: UserStats = {
      readinessScore: 0,
      questionsAnsweredToday: 0,
      dailyGoal: 30,
      streakDays: 0,
      practiceTimeMin: 0,
      accuracyPercent: 0,
      rankText: 'Level 1: Permit Seeker',
      testDaysLeft: stats.testDaysLeft,
      totalTestsTaken: 0,
      masteredSignsCount: 0,
      userName: stats.userName,
      hasActualActivity: false,
      categoryScores: {
        rulesOfRoad: 0,
        signsSignals: 0,
        safeDriving: 0,
      },
    };
    saveStats(defaultStats);
    setIsQuizActive(false);
    setIsFlashcardsActive(false);
    setQuizNotification(null);
    setCurrentTab('home');
  };

  const handleUpdateProfile = (name: string) => {
    const newStats: UserStats = {
      ...stats,
      userName: name,
    };
    saveStats(newStats);
  };

  const handleUpdateAvatar = (avatar: string | undefined) => {
    const newStats: UserStats = {
      ...stats,
      selectedAvatar: avatar,
    };
    saveStats(newStats);
  };

  const handleOpenProfileTab = () => {
    setIsProfileTabActive(true);
    setIsQuizActive(false);
    setIsFlashcardsActive(false);
    setIsSidebarOpen(false);
    setQuizNotification(null);
  };

  const handleTabSelection = (tab: TabType) => {
    setCurrentTab(tab);
    setIsProfileTabActive(false);
    setIsQuizActive(false);
    setIsFlashcardsActive(false);
    setIsSidebarOpen(false);
    setQuizNotification(null);
  };

  const renderActiveTabContent = () => {
    if (isProfileTabActive) {
      return (
        <ProfileView
          stats={stats}
          onChangeTestDays={handleChangeTestDays}
          onResetStats={handleResetStats}
          onUpdateProfile={handleUpdateProfile}
          onUpdateAvatar={handleUpdateAvatar}
          proPassUnlocked={proPassUnlocked}
          onTriggerProPass={() => setShowProPassModal(true)}
        />
      );
    }

    switch (currentTab) {
      case 'home':
        return (
          <DashboardView
            stats={stats}
            setTab={handleTabSelection}
            startPracticeQuiz={handleStartPracticeQuiz}
            startFlashcards={handleStartFlashcards}
            onUpdateProfile={handleUpdateProfile}
            proPassUnlocked={proPassUnlocked}
            onTriggerProPass={() => setShowProPassModal(true)}
            startCramMode={handleStartCramMode}
          />
        );
      case 'mistakes':
        return (
          <MistakeReviewView
            onStartReview={handleStartMistakeReview}
            onExit={() => handleTabSelection('home')}
            proPassUnlocked={proPassUnlocked}
            onTriggerProPass={() => setShowProPassModal(true)}
          />
        );
      case 'tests':
        return (
          <div className="space-y-6">
            <section className="space-y-2">
              <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-primary-navy">
                Available Practice Tests
              </h2>
              <p className="text-sm md:text-base text-text-muted">
                Prepare with our verified state test simulators covering warning indicators, signs, and road maneuvers.
              </p>
            </section>

            {/* Cram Mode Teaser */}
            {!proPassUnlocked ? (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50/20 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in text-left">
                <div className="flex items-center gap-3.5 text-left">
                  <div className="p-2.5 bg-amber-500/10 text-amber-600 rounded-xl shrink-0">
                    <Zap className="w-5 h-5 fill-amber-500/10 stroke-[2px]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-sans font-extrabold text-[#002045] text-sm">
                        Cram Mode
                      </h4>
                      <span className="bg-[#fe9743] text-primary-navy text-[8px] font-black uppercase px-2 py-0.5 rounded leading-none">
                        PRO PASS
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mt-0.5">
                      Short on time? Rapid review for test day. Prepare with an algorithm-guided crash course.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowProPassModal(true)}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-[#001025] font-extrabold text-[11px] px-4 py-2 rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-colors shrink-0"
                >
                  <Lock className="w-3.5 h-3.5 shrink-0" />
                  <span>Unlock Pro Pass</span>
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-[#faece2]/30 to-orange-50/10 border border-[#fe9743]/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in text-left">
                <div className="flex items-center gap-3.5 text-left">
                  <div className="p-2.5 bg-safety-orange/10 text-safety-orange-dark rounded-xl shrink-0">
                    <Zap className="w-5 h-5 fill-safety-orange/10 stroke-[2px] animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-sans font-extrabold text-[#002045] text-sm">
                        Cram Mode
                      </h4>
                      <span className="bg-safety-orange/20 text-safety-orange border border-safety-orange/30 text-[8px] font-black uppercase px-2 py-0.5 rounded leading-none">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mt-0.5">
                      Ready for test day. Start your rapid review session now!
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleStartCramMode}
                  className="w-full sm:w-auto bg-[#002045] hover:bg-[#0d2a4d] text-white font-extrabold text-[11px] px-4 py-2 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors shrink-0"
                >
                  <Zap className="w-3.5 h-3.5 shrink-0 fill-current" />
                  <span>Start Cramming</span>
                </button>
              </div>
            )}            {/* Test Listing Layout */}
            <div className="space-y-4">
              {PRACTICE_TESTS.map((test) => {
                const isFreeTest = test.group === 12;
                const isUnlocked = isPracticeTestUnlocked(test.group, proPassUnlocked);

                if (isUnlocked) {
                  return (
                    <div
                      key={test.group}
                      className="bg-white border-2 border-primary-navy rounded-2xl p-5 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all hover:shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary-navy/10 rounded-xl text-primary-navy py-4">
                          <ClipboardList className="w-7 h-7" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-sans font-extrabold text-lg text-primary-navy">
                              Practice Test {test.testNumber}: {test.title}
                            </h4>
                            {isFreeTest ? (
                              <span className="bg-safety-orange text-primary-navy text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full">
                                Recommended
                              </span>
                            ) : (
                              <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 font-sans">
                                <Sparkles className="w-2.5 h-2.5 fill-emerald-600" /> Pro Pass Active
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-text-muted mt-1">
                            Focus: {test.focus}
                          </p>
                          <div className="flex gap-4 mt-2 text-xs font-bold text-text-muted">
                            <span>✓ {test.qCount} Targeted Questions</span>
                            <span>⏱ {test.time}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleStartPracticeQuiz(test.group)}
                        className="w-full md:w-auto bg-primary-navy hover:bg-[#082345] text-white font-bold py-2.5 px-6 rounded-xl text-xs transition-transform active:scale-95 cursor-pointer shadow-xs select-none shrink-0"
                      >
                        Start Test Now
                      </button>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={test.group}
                      className="bg-[#fffdf5] border-2 border-amber-300 rounded-2xl p-5 shadow-xs flex flex-col md:flex-row justify-between items-[#001025] md:items-center gap-4 transition-all hover:border-amber-450"
                    >
                      <div className="flex items-start gap-4 text-left">
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 py-4">
                          <Lock className="w-7 h-7" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-sans font-extrabold text-[#002045] text-lg">
                              Practice Test {test.testNumber}: {test.title}
                            </h4>
                            <span className="bg-amber-100 text-amber-800 text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 font-sans font-bold">
                              Pro Pass Required
                            </span>
                          </div>
                          <p className="text-sm text-text-muted mt-1">
                            Focus: {test.focus}
                          </p>
                          <div className="flex gap-4 mt-2 text-xs font-bold text-text-muted">
                            <span>✓ {test.qCount} Targeted Questions</span>
                            <span>⏱ {test.time}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowProPassModal(true)}
                        className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-[#001025] font-black py-2.5 px-6 rounded-xl text-xs transition-transform active:scale-95 cursor-pointer shadow-md select-none shrink-0 flex items-center justify-center gap-1.5"
                      >
                        <Sparkles className="w-4 h-4 fill-[#001025]" />
                        <span>Unlock with Pro Pass</span>
                      </button>
                    </div>
                  );
                }
              })}
            </div>

          </div>
        );
      case 'stats':
        return (
          <StatsView
            stats={stats}
            setTab={handleTabSelection}
            startFlashcards={handleStartFlashcards}
            onResetStats={handleResetStats}
          />
        );
      case 'library':
        return (
          <SignLibraryView
            signs={ROAD_SIGNS}
            goToFlashcardsForSign={handleGoToFlashcardsForSign}
            proPassUnlocked={proPassUnlocked}
            onTriggerProPass={() => setShowProPassModal(true)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cool-bg text-text-dark font-sans flex flex-col select-none relative">
      
      {/* Dynamic Header */}
      <Header
        currentTab={currentTab}
        setTab={handleTabSelection}
        onOpenMenu={() => setIsSidebarOpen(true)}
        onOpenProfile={handleOpenProfileTab}
        titleOverride={isQuizActive ? 'Practice Session' : isFlashcardsActive ? 'Flashcards Session' : undefined}
        stats={stats}
        proPassUnlocked={proPassUnlocked}
        onBack={
          isQuizActive
            ? () => setShowQuitConfirm(true)
            : isFlashcardsActive
            ? () => setIsFlashcardsActive(false)
            : undefined
        }
      />

      {/* Floating alert celebrating completed quiz highlights */}
      {quizNotification && (
        <div className={`fixed top-18 left-1/2 -translate-x-1/2 z-40 max-w-lg w-[calc(100%-2rem)] border-2 rounded-xl p-4 shadow-md animate-fade-in text-xs font-semibold flex items-start gap-2.5 ${
          quizNotification.isPassing 
            ? 'bg-green-50 border-green-600 text-green-900' 
            : 'bg-amber-50 border-amber-500 text-amber-900'
        }`}>
          {quizNotification.isPassing ? (
            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
          ) : (
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          )}
          <div className="flex-1 pr-2">
            <p className="leading-relaxed">{quizNotification.text}</p>
          </div>
          <button onClick={() => setQuizNotification(null)} className={`cursor-pointer ${
            quizNotification.isPassing ? 'text-green-700' : 'text-amber-700'
          }`}>
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Primary Container Shell */}
      <main className={`flex-grow pt-20 px-4 max-w-7xl mx-auto w-full transition-all duration-300 ${
        (isQuizActive || isFlashcardsActive) ? 'pb-12' : 'pb-28'
      }`}>
        {isQuizActive ? (
          <PracticeQuizView
            questions={activeQuizQuestions}
            onCompleteQuiz={handleCompleteQuiz}
            onExit={() => setShowQuitConfirm(true)}
            isReviewSession={isReviewQuiz || isCramModeQuiz}
          />
        ) : isFlashcardsActive ? (
          <FlashcardsView
            signs={ROAD_SIGNS}
            startSignId={activeSignId}
            onExit={() => setIsFlashcardsActive(false)}
            onMasteredCard={handleMasteredCard}
            proPassUnlocked={proPassUnlocked}
            onTriggerProPass={() => setShowProPassModal(true)}
          />
        ) : (
          renderActiveTabContent()
        )}
      </main>

      {/* Mobile Global Bottom Navigation Bar */}
      {!isQuizActive && !isFlashcardsActive && (
        <BottomNavBar
          currentTab={isProfileTabActive ? 'profile' : currentTab}
          setTab={handleTabSelection}
          onOpenProfile={handleOpenProfileTab}
        />
      )}

      {/* Custom Drawer/Sidebar Modal panel for Menu options */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex" id="sidebar-drawer">
          {/* Backdrop */}
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-primary-navy/40 backdrop-blur-xs transition-opacity cursor-pointer"
          />

          {/* Drawer sheet panel */}
          <div className="relative flex-1 flex flex-col max-w-sm w-full bg-slate-50 text-text-dark shadow-2xl animate-slide-in border-r border-slate-200" id="drawer-sheet-panel">
            {/* Header block with cover (refined to a beautiful slate style with user avatar and stats widget) */}
            <div className="bg-[#051329] text-white p-6 relative overflow-hidden flex flex-col gap-4">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Top Row: App Logo & Close Button */}
              <div className="flex items-center justify-between w-full z-10">
                <div className="flex items-center gap-2">
                  <div className="bg-amber-500/15 p-1.5 rounded-lg border border-amber-500/30">
                    <Award className="w-5 h-5 text-amber-400 stroke-[2.5]" />
                  </div>
                  <span className="font-sans font-extrabold text-xl tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">DriveReady</span>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all cursor-pointer"
                  title="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* User Avatar Info Row */}
              <div className="flex items-center gap-3 mt-2 z-10">
                <div className="relative flex-none">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-white text-lg shadow-md border-2 border-[#051329]">
                    {(stats.userName || 'D')[0].toUpperCase()}
                  </div>
                  {stats.streakDays > 0 && (
                    <div className="absolute -bottom-1 -right-1 bg-rose-600 text-white rounded-full p-0.5 text-[9px] font-black border border-[#051329] flex items-center justify-center shadow-sm">
                      <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-100 font-sans tracking-tight leading-snug">
                    {stats.userName || 'Future Driver'}
                  </h4>
                  <p className="text-xs text-slate-450 font-semibold uppercase tracking-wider text-[10px]">
                    Lvl {getUserLevelInfo(stats).level}: {getUserLevelInfo(stats).levelName}
                  </p>
                </div>
              </div>

              {/* Exam Readiness Tracker widget */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 mt-2 z-10">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-bold tracking-wide uppercase">
                  <span>Exam Readiness Score</span>
                  <span className="text-amber-400 font-sans font-extrabold text-sm">{stats.readinessScore}%</span>
                </div>
                
                {/* Visual Glass Progress bar */}
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000"
                    style={{ width: `${stats.readinessScore}%` }}
                  />
                </div>
                
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  {stats.readinessScore >= 85 
                    ? "✨ Ready to ace the official DMV test!" 
                    : stats.readinessScore >= 60 
                      ? "⚡ Solid foundation, keep perfecting warning signs." 
                      : "🎯 Study signs and start taking practice tests to level up."}
                </p>
              </div>
            </div>

            {/* Quick Stat Strip to fill dead-space & show achievement */}
            <div className="grid grid-cols-2 gap-2 p-4 bg-slate-100/85 border-b border-slate-200">
              <div className="bg-white border border-slate-200/60 p-3 rounded-xl flex items-center gap-2.5 shadow-xs">
                <div className="bg-rose-50 text-rose-600 p-1.5 rounded-lg flex-none">
                  <Flame className="w-4 h-4 fill-rose-50 border-none" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider truncate">Streak</span>
                  <span className="font-sans font-black text-xs sm:text-sm text-slate-800 leading-tight block truncate">{stats.streakDays} Days</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200/60 p-3 rounded-xl flex items-center gap-2.5 shadow-xs">
                <div className="bg-amber-50 text-amber-600 p-1.5 rounded-lg flex-none">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider truncate">Mastered</span>
                  <span className="font-sans font-black text-xs sm:text-sm text-slate-800 leading-tight block truncate">{stats.masteredSignsCount || 0} Signs</span>
                </div>
              </div>
            </div>

            {/* Menu checklist - with premium styling and responsive interactive touch sizing */}
            <nav className="flex-1 p-5 space-y-2.5 overflow-y-auto bg-white">
              <button
                onClick={() => handleTabSelection('home')}
                className={`w-full flex items-center gap-3.5 p-3 rounded-xl font-sans font-semibold text-[15px] transition-all duration-205 select-none cursor-pointer group ${
                  currentTab === 'home' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/10 text-amber-700 border-l-4 border-amber-500 pl-2.5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg transition-transform group-hover:scale-105 ${
                  currentTab === 'home' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/15 text-amber-600'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  <Home className="w-4.5 h-4.5" />
                </div>
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => handleTabSelection('tests')}
                className={`w-full flex items-center gap-3.5 p-3 rounded-xl font-sans font-semibold text-[15px] transition-all duration-205 select-none cursor-pointer group ${
                  currentTab === 'tests' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/10 text-amber-700 border-l-4 border-amber-500 pl-2.5'
                    : 'text-slate-600 hover:text-slate-905 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg transition-transform group-hover:scale-105 ${
                  currentTab === 'tests' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/15 text-amber-600'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  <ClipboardList className="w-4.5 h-4.5" />
                </div>
                <span>Practice Tests</span>
              </button>

              <button
                onClick={() => handleTabSelection('library')}
                className={`w-full flex items-center gap-3.5 p-3 rounded-xl font-sans font-semibold text-[15px] transition-all duration-205 select-none cursor-pointer group ${
                  currentTab === 'library' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/10 text-amber-700 border-l-4 border-amber-500 pl-2.5'
                    : 'text-slate-600 hover:text-slate-905 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg transition-transform group-hover:scale-105 ${
                  currentTab === 'library' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/15 text-amber-600'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <span>Sign Library</span>
              </button>

              <button
                onClick={handleStartFlashcards}
                className={`w-full flex items-center gap-3.5 p-3 rounded-xl font-sans font-semibold text-[15px] transition-all duration-205 select-none cursor-pointer group ${
                  isFlashcardsActive
                    ? 'bg-amber-500/10 text-amber-700 border-l-4 border-amber-500 pl-2.5'
                    : 'text-slate-600 hover:text-slate-905 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg transition-transform group-hover:scale-105 ${
                  isFlashcardsActive
                    ? 'bg-amber-500/15 text-amber-600'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  <Zap className="w-4.5 h-4.5" />
                </div>
                <span>Flashcards Study</span>
              </button>

              <button
                onClick={() => handleTabSelection('stats')}
                className={`w-full flex items-center gap-3.5 p-3 rounded-xl font-sans font-semibold text-[15px] transition-all duration-205 select-none cursor-pointer group ${
                  currentTab === 'stats' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/10 text-amber-700 border-l-4 border-amber-500 pl-2.5'
                    : 'text-slate-600 hover:text-slate-905 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg transition-transform group-hover:scale-105 ${
                  currentTab === 'stats' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/15 text-amber-600'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  <TrendingUp className="w-4.5 h-4.5" />
                </div>
                <span>My Progress</span>
              </button>

              <button
                onClick={() => handleTabSelection('mistakes')}
                className={`w-full flex items-center gap-3.5 p-3 rounded-xl font-sans font-semibold text-[15px] transition-all duration-205 select-none cursor-pointer group ${
                  currentTab === 'mistakes' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/10 text-amber-500 border-l-4 border-amber-500 pl-2.5'
                    : 'text-slate-600 hover:text-slate-905 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg transition-transform group-hover:scale-105 ${
                  currentTab === 'mistakes' && !isProfileTabActive && !isFlashcardsActive
                    ? 'bg-amber-500/15 text-amber-550'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                }`}>
                  <ShieldAlert className="w-4.5 h-4.5" />
                </div>
                <span className="flex items-center gap-1.5 justify-between w-full">
                  <span>Mistake Review</span>
                  <span className="bg-red-100 text-red-650 text-[10px] sm:text-[10.5px] font-black px-2 py-0.5 rounded-full select-none leading-none scale-90">New</span>
                </span>
              </button>

              <div className="border-t border-slate-150 my-3.5 pt-3.5">
                <button
                  onClick={handleOpenProfileTab}
                  className={`w-full flex items-center gap-3.5 p-3 rounded-xl font-sans font-semibold text-[15px] transition-all duration-205 select-none cursor-pointer group ${
                    isProfileTabActive
                      ? 'bg-[#051329]/10 text-[#051329] border-l-4 border-[#051329] pl-2.5'
                      : 'text-slate-600 hover:text-slate-905 hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-transform group-hover:scale-105 ${
                    isProfileTabActive
                      ? 'bg-[#051329]/15 text-[#051329]'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                  }`}>
                    <User className="w-4.5 h-4.5" />
                  </div>
                  <span>My Profile Options</span>
                </button>
              </div>
            </nav>

            {/* Footer stamp (California Republic CA DMV Edition) */}
            <div className="p-4 border-t border-slate-100 flex flex-col items-center justify-center gap-1.5 bg-slate-50 select-none">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[14px]">🐻</span>
                <span className="font-sans font-black text-[9px] uppercase text-slate-500 tracking-widest">California Republic</span>
              </div>
              <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                DriveReady 2026 CA DMV Edition • v1.1.0
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern, state-driven Quit Practice Confirmation Dialog */}
      {showQuitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with elegant glass reflection blurring */}
          <div 
            onClick={() => setShowQuitConfirm(false)}
            className="fixed inset-0 bg-[#001025]/65 backdrop-blur-xs transition-opacity cursor-pointer animate-fade-in"
          />

          {/* Modal layout container card */}
          <div className="relative bg-white text-text-dark w-full max-w-sm rounded-2xl shadow-2xl p-6 overflow-y-auto animate-slide-in border border-border-light text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <ShieldAlert className="w-6 h-6 stroke-[2.5px]" />
            </div>
            
            <div className="space-y-2">
              <h4 className="font-sans font-extrabold text-xl text-primary-navy">
                Abandon Practice Session?
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                Your progress on this practice test will be discarded and won't lock into your dynamic readiness stats.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button 
                onClick={() => setShowQuitConfirm(false)}
                className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Keep Practicing
              </button>
              <button 
                onClick={() => {
                  setShowQuitConfirm(false);
                  setIsQuizActive(false);
                  setIsCramModeQuiz(false);
                  setIsReviewQuiz(false);
                }}
                className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all active:scale-95 duration-100 cursor-pointer shadow-md"
              >
                Abandon Session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pro Pass Purchase Modal Popup */}
      {showProPassModal && (
        <ProPassModal 
          onClose={() => setShowProPassModal(false)}
          onUnlocked={() => {
            setProPassUnlocked(true);
            // Lock states will reload instantly and reactively
          }}
        />
      )}

    </div>
  );
}

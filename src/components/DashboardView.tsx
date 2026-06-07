/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronRight, HelpCircle, AlertTriangle, Lightbulb, Flame, Clock, Target, Trophy, X, Sparkles, Info, RefreshCw } from 'lucide-react';
import { TabType, UserStats } from '../types';
import { PRO_TIPS } from '../proTips';
const windyRoadImg = '/src/assets/images/windy_road_exact_match_1780632600693.png';
const californiaBadgeImg = '/src/assets/images/california_state_flag_badge_1780860429638.png';

interface DashboardViewProps {
  stats: UserStats;
  setTab: (tab: TabType) => void;
  startPracticeQuiz: (testGroup?: number) => void;
  startFlashcards: () => void;
}

interface TestDetail {
  group: number;
  testNumber: number;
  title: string;
  focus: string;
  category: 'rulesOfRoad' | 'signsSignals' | 'safeDriving';
  threshold: number;
  estTime: string;
}

const ALL_TESTS: TestDetail[] = [
  { group: 12, testNumber: 1, title: "Signals & Right of Way", focus: "Intersection yields, traffic lights, right-of-way priority", category: "signsSignals", threshold: 0, estTime: "10 min" },
  { group: 13, testNumber: 2, title: "Highway Merging & Lane Laws", focus: "Merging, center turn lanes, cyclist clearance", category: "rulesOfRoad", threshold: 15, estTime: "10 min" },
  { group: 14, testNumber: 3, title: "Emergency Actions & DUI Rules", focus: "Wet road safety, emergency spacing, limits", category: "safeDriving", threshold: 20, estTime: "10 min" },
  { group: 15, testNumber: 4, title: "Minor Exemptions & Signaling", focus: "Curfews, school notes, lane signaling rates", category: "rulesOfRoad", threshold: 25, estTime: "10 min" },
  { group: 16, testNumber: 5, title: "Colored Curbs & Parking Altitudes", focus: "Colored curbs, parking elevation restwheels", category: "rulesOfRoad", threshold: 30, estTime: "10 min" },
  { group: 17, testNumber: 6, title: "Seatbelts, Safety & Speed Limits", focus: "Airbags, rear seatbelts, blind intersection speeds", category: "safeDriving", threshold: 35, estTime: "10 min" },
  { group: 18, testNumber: 7, title: "DUI Probation & Chemical Tests", focus: "BAC limit laws, chemical test refusal rules", category: "safeDriving", threshold: 40, estTime: "10 min" },
  { group: 19, testNumber: 8, title: "Licensing, Permits & Admin Rules", focus: "Minor provisional restrictions, legal curfews", category: "rulesOfRoad", threshold: 45, estTime: "10 min" },
  { group: 20, testNumber: 9, title: "Sharing the Road & Special Hazards", focus: "Bicycle clearances, school zones, bus stopping", category: "safeDriving", threshold: 50, estTime: "10 min" },
  { group: 21, testNumber: 10, title: "Alcohol & Legal Consequences", focus: "BAC limits, open container laws, under-21 zero tolerance", category: "safeDriving", threshold: 55, estTime: "10 min" },
  { group: 22, testNumber: 11, title: "Traffic Lanes & Pavement Lines", focus: "Solid yellow line markings, turnout queue rules", category: "signsSignals", threshold: 60, estTime: "10 min" },
  { group: 23, testNumber: 12, title: "Safety Equipment & Inspection", focus: "Dimming distances, high-beams, window tints", category: "safeDriving", threshold: 65, estTime: "10 min" },
  { group: 24, testNumber: 13, title: "Devices, Littering & Liability", focus: "Under-18 handset bans, hands-free mounting, fines", category: "safeDriving", threshold: 70, estTime: "10 min" },
  { group: 25, testNumber: 14, title: "Special Roads & Emergency Handling", focus: "Mountain roads, hydroplane actions, NOTS points", category: "safeDriving", threshold: 75, estTime: "10 min" },
  { group: 26, testNumber: 15, title: "Hill Parking & Signal Directions", focus: "Curb wheels, arm/hand gestures, horse riders", category: "rulesOfRoad", threshold: 80, estTime: "10 min" }
];

export const DashboardView: React.FC<DashboardViewProps> = ({
  stats,
  setTab,
  startPracticeQuiz,
  startFlashcards,
}) => {
  const [isBreakdownOpen, setIsBreakdownOpen] = useState(false);
  const [activeTipIndex, setActiveTipIndex] = useState(() => Math.floor(Math.random() * PRO_TIPS.length));
  
  const goalPercentage = Math.round((stats.questionsAnsweredToday / stats.dailyGoal) * 100);

  // Dynamic formula components calculated live
  const categoryAverage = Math.round(
    (stats.categoryScores.rulesOfRoad + stats.categoryScores.signsSignals + stats.categoryScores.safeDriving) / 3
  );
  const categoryContribution = Math.round(0.5 * categoryAverage);
  const accuracyContribution = Math.round(0.4 * stats.accuracyPercent);
  const testContribution = Math.min(stats.totalTestsTaken * 1, 10);
  const streakBonus = stats.streakDays >= 5 ? 5 : stats.streakDays >= 3 ? 3 : 0;

  // Check if everything is at 0 (e.g., after resetting or freshly loaded with empty stats)
  const allZero =
    stats.categoryScores.rulesOfRoad === 0 &&
    stats.categoryScores.signsSignals === 0 &&
    stats.categoryScores.safeDriving === 0;

  // Next steps recommendations
  const getWeakestCategory = () => {
    const scores = [
      { name: 'Rules of the Road', score: stats.categoryScores.rulesOfRoad, tab: 'tests' },
      { name: 'Signs & Signals', score: stats.categoryScores.signsSignals, tab: 'library' },
      { name: 'Safe Driving', score: stats.categoryScores.safeDriving, tab: 'tests' },
    ];
    if (allZero) return null;
    return scores.reduce((prev, curr) => (prev.score < curr.score ? prev : curr));
  };

  const weakestCategory = getWeakestCategory();

  // Calculate recommended test dynamically
  const getRecommendedTest = (): TestDetail => {
    // 1. Get all unlocked tests
    const unlocked = ALL_TESTS.filter(t => stats.readinessScore >= t.threshold);
    if (unlocked.length === 0) return ALL_TESTS[0]; // fallback safety

    // Map name to category key
    const weakestCategoryKey = weakestCategory?.name === 'Rules of the Road' 
      ? 'rulesOfRoad' 
      : weakestCategory?.name === 'Signs & Signals' 
        ? 'signsSignals' 
        : weakestCategory?.name === 'Safe Driving' 
          ? 'safeDriving' 
          : null;

    if (weakestCategoryKey) {
      // Find unlocked tests belonging to their weakest category
      const weakestUnlocked = unlocked.filter(t => t.category === weakestCategoryKey);
      if (weakestUnlocked.length > 0) {
        // Recommend one based on total tests taken to introduce variety
        return weakestUnlocked[stats.totalTestsTaken % weakestUnlocked.length];
      }
    }

    // Fallback: cycle through all unlocked tests based on totalTestsTaken
    return unlocked[stats.totalTestsTaken % unlocked.length];
  };

  const recommendedTest = getRecommendedTest();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <section className="space-y-1">
        <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-primary-navy tracking-tight animate-fade-in">
          Hello, {stats.userName || 'Chris'}.
        </h2>
        <p className="text-base md:text-lg text-text-muted">
          {stats.testDaysLeft !== undefined ? (
            <>
              You're making steady progress. Your test is in{' '}
              <span className="font-bold text-primary-navy">{stats.testDaysLeft} days</span>.
            </>
          ) : (
            <>
              You're making steady progress.{' '}
              <span className="text-primary-navy font-semibold">Set your target exam date</span> in Profile to track your countdown.
            </>
          )}
        </p>
      </section>

      {/* California State DMV Alignment Banner */}
      <section className="bg-gradient-to-r from-red-50/20 to-neutral-50/30 border border-slate-200/60 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5 shadow-xs relative overflow-hidden select-none animate-fade-in" id="california-state-dmv-alignment-banner">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.02] rounded-full blur-2xl pointer-events-none" />
        <div className="w-20 h-12 flex-none border border-slate-200 p-0.5 rounded-lg bg-white shadow-2xs overflow-hidden flex items-center justify-center">
          <img 
            src={californiaBadgeImg} 
            alt="Official California State Flag Badge" 
            className="w-full h-full object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-1 text-center sm:text-left flex-1 md:pr-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
            <span className="font-sans font-black text-[9px] uppercase bg-red-600 text-white px-2 py-0.5 rounded tracking-widest leading-none">
              State Aligned
            </span>
            <span className="text-xs text-red-850 font-extrabold font-sans">
              2026 California DMV Study Guide
            </span>
          </div>
          <p className="text-xs md:text-[13px] text-text-muted leading-relaxed font-semibold">
            All practice tests, sign libraries, and pro-tips are directly aligned with the official <span className="font-semibold text-primary-navy">2026 California Driver's Handbook</span> rules, speed limits, and alcohol regulations.
          </p>
        </div>
      </section>

      {/* Main Dashboard Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Readiness Score Card */}
        <div 
          onClick={() => setIsBreakdownOpen(true)}
          className="md:col-span-5 bg-white border border-border-light hover:border-safety-orange rounded-2xl p-6 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:shadow-sm cursor-pointer group active:scale-[0.99] relative overflow-hidden"
          title="Click to view detailed score breakdown"
        >
          {/* Subtle top indicator bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-safety-orange to-[#ffb174] opacity-0 group-hover:opacity-100 transition-opacity" />

          <h3 className="font-sans font-bold text-xs tracking-widest text-[#5c6f84] uppercase mb-4 flex items-center gap-1">
            READINESS SCORE <Sparkles className="w-3.5 h-3.5 text-safety-orange animate-pulse" />
          </h3>

          {/* SVG Circular Progress Meter (high-contrast safety indicator) */}
          <div className="relative w-44 h-44 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-[1.04]">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Slate unfilled background path */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#ebeef0"
                strokeWidth="9"
                fill="transparent"
              />
              {/* Vibrant safety orange filled progress path */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#fe9743"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * stats.readinessScore) / 100}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="font-sans font-extrabold text-4xl text-primary-navy tracking-tighter">
                {stats.readinessScore}%
              </span>
              <span className="font-sans font-bold text-[10px] text-text-muted uppercase tracking-wider mt-0.5">
                {stats.readinessScore >= 85 ? 'Exam Ready' : stats.readinessScore >= 70 ? 'Almost Ready' : 'In Training'}
              </span>
            </div>
          </div>

          <p className="text-xs font-semibold px-2.5 py-1 bg-cool-bg rounded-lg text-primary-navy-light group-hover:bg-safety-orange/10 group-hover:text-primary-navy transition-colors mb-2">
            ℹ Click to analyze calculation limits
          </p>

          <p className="text-xs text-text-muted">
            {stats.readinessScore >= 85 ? (
              <span className="text-green-600 font-bold">✓ High probability of passing DMV permit exam!</span>
            ) : weakestCategory ? (
              <span>Your weakest area is <strong className="text-safety-orange-dark">{weakestCategory.name}</strong> ({weakestCategory.score}%)</span>
            ) : (
              <span>No practice history yet. Take a quiz to establish your standing!</span>
            )}
          </p>
        </div>

        {/* Daily Goal Tracker */}
        <div className="md:col-span-7 bg-white border border-border-light rounded-2xl p-6 flex flex-col justify-between shadow-xs transition-shadow hover:shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-sans font-extrabold text-xl text-primary-navy">
                  Daily Goal
                </h3>
                <p className="text-sm text-text-muted">
                  {stats.questionsAnsweredToday} / {stats.dailyGoal} questions answered today
                </p>
              </div>
              <div className="bg-safety-orange text-primary-navy font-black px-4 py-1.5 rounded-full text-sm text-center flex items-center justify-center">
                {goalPercentage}%
              </div>
            </div>

            {/* Accessible safety orange progress slider indicator */}
            <div className="w-full bg-slate-100 rounded-full h-3">
              <div
                className="bg-safety-orange h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${Math.min(goalPercentage, 100)}%` }}
              />
            </div>
          </div>

          {/* Quick Stats Bento Subdivision */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            <div className="p-3 bg-cool-bg rounded-xl border border-slate-100 hover:border-accent-peach/50 transition-colors flex flex-col justify-between">
              <span className="text-[10px] font-bold text-text-muted block tracking-wider uppercase mb-1 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-safety-orange stroke-2" /> STREAK
              </span>
              <span className="font-sans font-extrabold text-lg text-primary-navy">
                {stats.streakDays} Days
              </span>
            </div>

            <div className="p-3 bg-cool-bg rounded-xl border border-slate-100 hover:border-accent-peach/50 transition-colors flex flex-col justify-between">
              <span className="text-[10px] font-bold text-text-muted block tracking-wider uppercase mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-primary-navy-light stroke-2" /> TIME
              </span>
              <span className="font-sans font-extrabold text-lg text-primary-navy">
                {stats.practiceTimeMin} Min
              </span>
            </div>

            <div className="p-3 bg-cool-bg rounded-xl border border-slate-100 hover:border-accent-peach/50 transition-colors flex flex-col justify-between">
              <span className="text-[10px] font-bold text-text-muted block tracking-wider uppercase mb-1 flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-green-600 stroke-2" /> ACCURACY
              </span>
              <span className="font-sans font-extrabold text-lg text-primary-navy">
                {stats.accuracyPercent}%
              </span>
            </div>

            <div className="p-3 bg-cool-bg rounded-xl border border-slate-100 hover:border-accent-peach/50 transition-colors flex flex-col justify-between">
              <span className="text-[10px] font-bold text-text-muted block tracking-wider uppercase mb-1 flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-yellow-500 stroke-2" /> RANK
              </span>
              <span className="font-sans font-extrabold text-base lg:text-lg text-primary-navy truncate">
                {stats.rankText}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Next Steps Screen Routing Area */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-sans font-extrabold text-xl text-primary-navy tracking-tight">
            Next Steps
          </h3>
          <button
            onClick={() => setTab('tests')}
            className="text-primary-navy font-bold text-sm flex items-center gap-1 hover:underline cursor-pointer"
          >
            View All <ChevronRight className="w-4 h-4 mt-0.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1: Dynamic Recommended Practice Quiz */}
          <div className="group bg-white border border-border-light rounded-2xl overflow-hidden shadow-xs hover:border-primary-navy transition-all duration-300 flex">
            <div className="w-24 shrink-0 bg-primary-navy flex items-center justify-center text-white group-hover:bg-primary-navy-light transition-colors">
              <HelpCircle className="w-9 h-9" />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-1">
                  <h4 className="font-sans font-extrabold text-[#002045] group-hover:text-primary-navy-light transition-colors line-clamp-2 leading-tight">
                    Practice Test {recommendedTest.testNumber}
                  </h4>
                  <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded whitespace-nowrap">
                    Recommended
                  </span>
                </div>
                <h5 className="text-xs font-bold text-text-muted mt-1 leading-snug">
                  {recommendedTest.title}
                </h5>
                <p className="text-xs text-text-muted mt-2 leading-relaxed">
                  Focus: {recommendedTest.focus}
                </p>
              </div>
              <button
                onClick={() => startPracticeQuiz(recommendedTest.group)}
                className="mt-4 w-full bg-primary-navy hover:bg-primary-navy-light text-white py-2.5 rounded-xl text-xs font-bold active:scale-[0.98] transition-transform shadow-xs flex items-center justify-center gap-1 cursor-pointer"
              >
                Start Recommended Test
              </button>
            </div>
          </div>

          {/* Card 2: Dynamic Study Action depending on Weakest Area */}
          {weakestCategory?.name === 'Rules of the Road' ? (
            <div className="group bg-white border border-border-light rounded-2xl overflow-hidden shadow-xs hover:border-primary-navy transition-all duration-300 flex">
              <div className="w-24 shrink-0 bg-[#004b93] flex items-center justify-center text-white group-hover:bg-[#005cb5] transition-colors">
                <Trophy className="w-9 h-9 text-slate-100 stroke-[2px]" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-1">
                    <h4 className="font-sans font-extrabold text-[#002045] group-hover:text-primary-navy-light transition-colors leading-tight">
                      Rules of the Road Study
                    </h4>
                    <span className="text-[11px] font-bold text-text-muted bg-slate-100 px-1.5 py-0.5 rounded whitespace-nowrap">
                      10 min
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">
                    Focus: Master right-of-way queue systems, merging priorities, lane boundaries, and regulatory laws.
                  </p>
                </div>
                <button
                  onClick={() => setTab('tests')}
                  className="mt-4 w-full border-2 border-primary-navy text-primary-navy hover:bg-cool-bg py-2 rounded-xl text-xs font-bold active:scale-[0.98] transition-transform flex items-center justify-center gap-1 cursor-pointer font-sans"
                >
                  Explore All Rules Tests
                </button>
              </div>
            </div>
          ) : weakestCategory?.name === 'Safe Driving' ? (
            <div className="group bg-white border border-border-light rounded-2xl overflow-hidden shadow-xs hover:border-primary-navy transition-all duration-300 flex">
              <div className="w-24 shrink-0 bg-[#351C75] flex items-center justify-center text-white group-hover:bg-[#4C2F8B] transition-colors">
                <Target className="w-9 h-9 text-purple-100 stroke-[2px]" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-1">
                    <h4 className="font-sans font-extrabold text-[#002045] group-hover:text-primary-navy-light transition-colors leading-tight">
                      Safe Driving Guide
                    </h4>
                    <span className="text-[11px] font-bold text-text-muted bg-slate-100 px-1.5 py-0.5 rounded whitespace-nowrap">
                      10 min
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-2 leading-relaxed">
                    Focus: Study emergency procedures, legal blood-alcohol limit numbers, safety restraints, and hazard zones.
                  </p>
                </div>
                <button
                  onClick={() => setTab('tests')}
                  className="mt-4 w-full border-2 border-primary-navy text-primary-navy hover:bg-cool-bg py-2 rounded-xl text-xs font-bold active:scale-[0.98] transition-transform flex items-center justify-center gap-1 cursor-pointer font-sans"
                >
                  Explore All Safety Tests
                </button>
              </div>
            </div>
          ) : (
            <div className="group bg-white border border-border-light rounded-2xl overflow-hidden shadow-xs hover:border-primary-navy transition-all duration-300 flex">
              <div className="w-24 shrink-0 relative bg-safety-orange-dark flex items-center justify-center text-white group-hover:bg-safety-orange transition-colors overflow-hidden">
                <img
                  src={windyRoadImg}
                  alt="Winding Road sign on mountain highway"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/20" />
                <AlertTriangle className="w-9 h-9 text-white relative z-10 drop-shadow-md stroke-[2.5px]" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-1">
                    <h4 className="font-sans font-extrabold text-[#002045] group-hover:text-primary-navy-light transition-colors leading-tight">
                      Road Signs Review
                    </h4>
                    <span className="text-[11px] font-bold text-text-muted bg-slate-100 px-1.5 py-0.5 rounded whitespace-nowrap">
                      5 min
                    </span>
                  </div>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Personalized flashcard active session to drill road hazard warnings and regulatory indicator shapes.
                  </p>
                </div>
                <button
                  onClick={startFlashcards}
                  className="mt-4 w-full border-2 border-primary-navy text-primary-navy hover:bg-cool-bg py-2 rounded-xl text-xs font-bold active:scale-[0.98] transition-transform flex items-center justify-center gap-1 cursor-pointer font-sans"
                >
                  {stats.totalTestsTaken === 0 ? 'Start Study' : 'Resume Flashcards'}
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Learning Fact / Civic Tip Callout */}
      <section className="border-l-4 border-safety-orange bg-safety-orange/5 p-5 rounded-r-2xl border-y border-r border-[#faece2]">
        <div className="flex items-start gap-3.5">
          <Lightbulb className="w-6 h-6 text-safety-orange-dark shrink-0 mt-0.5 stroke-[2.5px]" />
          <div className="space-y-1.5 flex-1 select-none">
            <div className="flex items-center justify-between">
              <h4 className="font-sans font-black text-xs text-safety-orange-dark uppercase tracking-widest">
                PRO TIP ({activeTipIndex + 1}/{PRO_TIPS.length})
              </h4>
              <button
                onClick={() => setActiveTipIndex((prev) => (prev + 1) % PRO_TIPS.length)}
                className="text-[10px] font-black text-safety-orange-dark hover:text-safety-orange-dark/80 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                title="Next Practice Pro Tip"
              >
                <span>NEXT TIP</span> <RefreshCw className="w-2.5 h-2.5" />
              </button>
            </div>
            <p className="text-sm md:text-base text-text-dark font-medium italic leading-relaxed animate-fade-in" key={activeTipIndex}>
              "{PRO_TIPS[activeTipIndex].tip}"
            </p>
          </div>
        </div>
      </section>

      {/* Readiness Score Breakdown Modal/Drawer */}
      {isBreakdownOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            onClick={() => setIsBreakdownOpen(false)}
            className="fixed inset-0 bg-primary-navy/40 backdrop-blur-xs transition-opacity cursor-pointer animate-fade-in"
          />

          {/* Modal Container */}
          <div className="relative bg-white text-text-dark w-full max-w-xl rounded-2xl shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] animate-slide-in border-2 border-primary-navy/20">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-5">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#fe9743] bg-safety-orange/10 px-2 py-0.5 rounded-md text-slate-800">
                  Readiness Criteria
                </span>
                <h4 className="font-sans font-extrabold text-2xl text-primary-navy mt-1">
                  Permit Exam Readiness
                </h4>
              </div>
              <button 
                onClick={() => setIsBreakdownOpen(false)}
                className="p-1 px-2.5 bg-slate-100 hover:bg-slate-200 text-text-muted hover:text-[#002045] font-bold rounded-xl transition-colors cursor-pointer text-xs"
              >
                Close
              </button>
            </div>

            {/* Core Score Ring visual */}
            <div className="flex items-center gap-6 p-4 bg-cool-bg rounded-2xl mb-6">
              <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#ebeef0" strokeWidth="8" fill="transparent" />
                  <circle
                    cx="50" cy="50" r="40" stroke="#fe9743" strokeWidth="9"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * stats.readinessScore) / 100}
                    strokeLinecap="round" fill="transparent"
                  />
                </svg>
                <span className="absolute font-sans font-extrabold text-2xl text-primary-navy">
                  {stats.readinessScore}%
                </span>
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-primary-navy">What is this score?</h5>
                <p className="text-xs text-text-muted leading-relaxed">
                  Calculated using verified California DMV evaluation principles. To ensure passing with high confidence, aim to reach at least <strong className="font-extrabold text-[#002045]">85%</strong> before exam day.
                </p>
              </div>
            </div>

            {/* Pillars list */}
            <div className="space-y-4">
              <h5 className="font-sans font-extrabold text-sm uppercase text-[#334d6e] tracking-wider border-l-2 border-primary-navy pl-2">
                Calculation Elements
              </h5>

              {/* Pillar 1: Category Mastery */}
              <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#002045] flex items-center gap-1.5">
                    1. Section Mastery (50% weight)
                  </span>
                  <span className="text-xs font-black text-[#5c6f84] bg-slate-200/50 px-2 py-0.5 rounded-full">
                    +{categoryContribution}% / +50%
                  </span>
                </div>
                <p className="text-[11px] text-text-muted">
                  Weighed across the three core California DMV subjects. Average of these scores is <strong className="font-extrabold text-[#002045]">{categoryAverage}%</strong>:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-semibold text-xs">
                  <div className="p-2 bg-white rounded-lg border border-slate-100">
                    <p className="text-[10px] text-text-muted">Rules of the Road</p>
                    <p className="text-sm font-extrabold text-primary-navy">{stats.categoryScores.rulesOfRoad}%</p>
                  </div>
                  <div className={`p-2 rounded-lg border ${stats.categoryScores.signsSignals < 60 ? 'bg-red-50/40 border-red-100' : 'bg-white border-slate-100'}`}>
                    <p className="text-[10px] text-text-muted">Signs & Signals</p>
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-extrabold ${stats.categoryScores.signsSignals < 60 ? 'text-red-700' : 'text-primary-navy'}`}>{stats.categoryScores.signsSignals}%</p>
                      {stats.categoryScores.signsSignals < 60 && <span className="text-[9px] uppercase font-black text-red-600 bg-red-100 px-1 rounded-sm animate-pulse">Low</span>}
                    </div>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-slate-100">
                    <p className="text-[10px] text-text-muted">Safe Driving</p>
                    <p className="text-sm font-extrabold text-primary-navy">{stats.categoryScores.safeDriving}%</p>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Accuracy */}
              <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-xl flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-bold text-sm text-[#002045] block">
                    2. Cumulative Practice Accuracy (40% weight)
                  </span>
                  <span className="text-xs text-text-muted block">
                    Current historical average: <strong className="font-extrabold text-[#002045]">{stats.accuracyPercent}%</strong> Accuracy.
                  </span>
                </div>
                <span className="text-xs font-black text-[#5c6f84] bg-slate-200/50 px-2.5 py-0.5 rounded-full shrink-0">
                  +{accuracyContribution}% / +40%
                </span>
              </div>

              {/* Pillar 3: Practice volume */}
              <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-xl flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-bold text-sm text-[#002045] block">
                    3. Experience Coefficient (10% weight)
                  </span>
                  <span className="text-xs text-text-muted block">
                    <strong className="font-extrabold text-[#002045]">{stats.totalTestsTaken} tests</strong> taken (Maxes out at 10 practice runs).
                  </span>
                </div>
                <span className="text-xs font-black text-[#5c6f84] bg-slate-200/50 px-2.5 py-0.5 rounded-full shrink-0">
                  +{testContribution}% / +10%
                </span>
              </div>

              {/* Bonus Term: Consistency */}
              <div className={`p-4 rounded-xl border flex items-center justify-between ${streakBonus > 0 ? 'bg-orange-50/50 border-[#fad9bc]' : 'bg-slate-50/50 border-slate-100'}`}>
                <div className="space-y-0.5">
                  <span className="font-bold text-sm text-[#002045] flex items-center gap-1">
                    4. Consistent Streak Bonus {streakBonus > 0 && <Flame className="w-4 h-4 text-safety-orange fill-safety-orange" />}
                  </span>
                  <span className="text-xs text-text-muted block">
                    Active streak of <strong className="font-extrabold text-[#002045]">{stats.streakDays} days</strong> ({stats.streakDays >= 5 ? 'Elite +5% Reward applied!' : stats.streakDays >= 3 ? '+3% Reward applied!' : 'Maintain a 3+ day streak for a bonus'}).
                  </span>
                </div>
                <span className={`text-xs font-black px-2.5 py-0.5 rounded-full shrink-0 ${streakBonus > 0 ? 'bg-safety-orange text-white' : 'bg-slate-200/50 text-[#5c6f84]'}`}>
                  +{streakBonus}% Bonus
                </span>
              </div>

            </div>

            {/* Call To Action recommendations based on weakest category */}
            <div className="mt-6 p-4 bg-primary-navy/5 border border-primary-navy/10 rounded-xl">
              <h6 className="font-bold text-xs text-primary-navy flex items-center gap-1 mb-1">
                <Info className="w-4 h-4 text-primary-navy-light" /> DYNAMIC ACTION STATEMENT
              </h6>
              {weakestCategory ? (
                <p className="text-xs text-text-muted leading-relaxed">
                  To maximize your readiness quickly, go to the{' '}
                  <button
                    onClick={() => {
                      setIsBreakdownOpen(false);
                      setTab(weakestCategory.tab as TabType);
                    }}
                    className="font-bold text-primary-navy hover:underline text-left cursor-pointer"
                  >
                    {weakestCategory.tab === 'library' ? 'Road Sign Library / Flashcards' : 'Theory Practice Tests'}
                  </button>{' '}
                  and boost your score in <strong className="text-primary-navy">{weakestCategory.name}</strong>, which is dragging your score down most with a <strong className="font-black text-[#002045]">{weakestCategory.score}%</strong> standing.
                </p>
              ) : (
                <p className="text-xs text-text-muted leading-relaxed">
                  Get started on your driver prep journey! Start practicing with a{' '}
                  <button
                    onClick={() => {
                      setIsBreakdownOpen(false);
                      setTab('home');
                    }}
                    className="font-bold text-primary-navy hover:underline text-left cursor-pointer"
                  >
                    Theory Practice Test
                  </button>{' '}
                  or study the{' '}
                  <button
                    onClick={() => {
                      setIsBreakdownOpen(false);
                      setTab('library');
                    }}
                    className="font-bold text-primary-navy hover:underline text-left cursor-pointer"
                  >
                    Road Sign Library
                  </button>{' '}
                  to build your initial readiness score.
                </p>
              )}
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

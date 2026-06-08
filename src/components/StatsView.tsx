/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, AlertTriangle, Lightbulb, TrendingUp, CheckCircle2, RefreshCw } from 'lucide-react';
import { UserStats, TabType } from '../types';
import { PRO_TIPS } from '../proTips';

interface StatsViewProps {
  stats: UserStats;
  setTab: (tab: TabType) => void;
  startFlashcards: () => void;
  onResetStats: () => void;
}

export const StatsView: React.FC<StatsViewProps> = ({
  stats,
  setTab,
  startFlashcards,
  onResetStats,
}) => {
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [activeTipIndex, setActiveTipIndex] = useState(() => Math.floor(Math.random() * PRO_TIPS.length));

  const categoriesList = [
    { id: 'rulesOfRoad', name: 'Rules of the Road', score: stats.categoryScores.rulesOfRoad, linkTab: 'home' },
    { id: 'signsSignals', name: 'Signs & Signals', score: stats.categoryScores.signsSignals, linkTab: 'library' },
    { id: 'safeDriving', name: 'Safe Driving', score: stats.categoryScores.safeDriving, linkTab: 'home' },
  ];

  const allZero = categoriesList.every(c => c.score === 0);
  const weakestCategory = allZero
    ? null
    : categoriesList.reduce((prev, curr) => (prev.score < curr.score ? prev : curr));

  const weeklyData = [
    { day: 'Mon', score: !stats.hasActualActivity ? 0 : 65 },
    { day: 'Tue', score: !stats.hasActualActivity ? 0 : 40 },
    { day: 'Wed', score: !stats.hasActualActivity ? 0 : 85 },
    { day: 'Thu', score: !stats.hasActualActivity ? 0 : 55 },
    { day: 'Fri', score: !stats.hasActualActivity ? 0 : 92 },
    { day: 'Sat', score: !stats.hasActualActivity ? 0 : 70 },
    { day: 'Today', score: !stats.hasActualActivity ? 0 : stats.accuracyPercent, isToday: true },
  ];

  return (
    <div className="space-y-6">
      
      {/* Summary Stats Header Section */}
      <section className="space-y-4">
        <h2 className="font-sans font-extrabold text-2xl tracking-tight text-primary-navy">
          Weekly Overview
        </h2>

        <div className="bg-white border border-border-light rounded-2xl p-6 shadow-xs">
          
          {/* Simple Custom Bar Chart Construction with tooltips */}
          {!stats.hasActualActivity ? (
            <div className="flex flex-col items-center justify-center h-48 border border-dashed border-slate-200/95 rounded-2xl bg-[#f8fafc]/70 p-6 text-center select-none mb-6 animate-fade-in" id="stats-weekly-empty-state">
              <TrendingUp className="w-10 h-10 text-slate-400 mb-2 stroke-1.5" />
              <p className="text-sm font-bold text-[#002045] max-w-sm">
                No practice data yet
              </p>
              <p className="text-xs text-text-muted mt-1 max-w-xs leading-relaxed font-semibold">
                Complete your first test to start tracking weekly progress.
              </p>
            </div>
          ) : (
            <div className="flex justify-between items-end h-48 gap-3 sm:gap-4 mb-6 pt-6 select-none relative">
              
              {/* Horizontal Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none">
                <div className="border-b border-dashed border-slate-100 w-full h-0" />
                <div className="border-b border-dashed border-slate-100 w-full h-0" />
                <div className="border-b border-dashed border-slate-100 w-full h-0" />
                <div className="border-b border-dashed border-slate-100 w-full h-0" />
              </div>

              {weeklyData.map((bar, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col items-center gap-2 h-full justify-end relative z-10"
                  onMouseEnter={() => setHoveredBarIndex(idx)}
                  onMouseLeave={() => setHoveredBarIndex(null)}
                >
                  {/* Score Tooltip */}
                  {hoveredBarIndex === idx && (
                    <div className="absolute -top-7 bg-primary-navy text-white text-[11px] font-bold px-1.5 py-0.5 rounded shadow-sm animate-fade-in whitespace-nowrap z-30">
                      {bar.score}% Score
                    </div>
                  )}
                  
                  {/* CSS Bar indicator */}
                  <div
                    style={{ height: `${bar.score}%` }}
                    className={`w-full rounded-t-lg transition-all duration-500 cursor-pointer ${
                      bar.isToday
                        ? 'bg-primary-navy hover:bg-primary-navy-light'
                        : 'bg-primary-navy-light/40 hover:bg-primary-navy-light/75'
                    }`}
                  />
                  
                  <span
                    className={`text-xs select-none ${
                      bar.isToday ? 'font-black text-primary-navy' : 'font-bold text-text-muted'
                    }`}
                  >
                    {bar.day}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Average metrics divider */}
          <div className="flex justify-between border-t border-border-light pt-4">
            <div>
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider">
                Avg. Score
              </p>
              <p className="font-sans font-extrabold text-2xl text-primary-navy">
                {stats.accuracyPercent}%
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider">
                Tests Taken
              </p>
              <p className="font-sans font-extrabold text-2xl text-primary-navy">
                {stats.totalTestsTaken}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Structured Category breakdown */}
      <section className="space-y-4">
        <h2 className="font-sans font-extrabold text-2xl tracking-tight text-primary-navy">
          Performance by Category
        </h2>

        <div className="space-y-4">
          {categoriesList.map((cat) => {
            const isWeakest = weakestCategory && weakestCategory.id === cat.id;
            return (
              <div
                key={cat.id}
                className={`bg-white rounded-2xl p-5 shadow-xs transition-transform duration-300 hover:translate-x-1 relative overflow-hidden ${
                  isWeakest ? 'border-2 border-red-600 shadow-sm' : 'border border-border-light'
                }`}
              >
                {isWeakest && (
                  <div className="absolute right-0 top-0 bg-red-600 text-white font-bold text-[9px] px-2.5 py-0.5 rounded-bl uppercase tracking-wider">
                    Weakest Area
                  </div>
                )}
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-base font-extrabold text-primary-navy">
                    {cat.name}
                  </span>
                  <span className={`text-sm font-black ${isWeakest ? 'text-red-600' : 'text-text-muted'}`}>
                    {cat.score}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div
                    className={`${isWeakest ? 'bg-red-600' : 'bg-primary-navy'} h-full rounded-full transition-all duration-750`}
                    style={{ width: `${cat.score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* High Alert Improvement card */}
      {weakestCategory ? (
        <section className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5 border-y border-r border-[#fef3c7] flex items-start gap-3.5 shadow-xs animate-fade-in">
          <Lightbulb className="w-6 h-6 text-amber-500 shrink-0 mt-0.5 stroke-[2.5px]" />
          
          <div className="space-y-3 flex-1">
            <div>
              <h3 className="font-sans font-extrabold text-lg text-primary-navy">
                Recommended Focus
              </h3>
              <p className="text-sm text-text-dark leading-relaxed mt-1">
                Your score in "{weakestCategory.name}" has the most room for growth. A little extra review here will build great momentum for your official exam!
              </p>
            </div>
            <button
              onClick={() => {
                if (weakestCategory.linkTab === 'library') {
                  setTab('library');
                } else {
                  setTab('home');
                }
              }}
              className="w-full mt-2 bg-primary-navy hover:bg-primary-navy-light text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
            >
              Review {weakestCategory.name} Now
              <svg
                className="w-4 h-4 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </section>
      ) : allZero ? (
        <section className="border-l-4 border-primary-navy bg-slate-50/70 p-5 rounded-r-2xl border-y border-r border-slate-100 flex items-start gap-3.5 shadow-xs animate-fade-in">
          <TrendingUp className="w-6 h-6 text-primary-navy shrink-0 mt-0.5 stroke-[2.5px]" />
          <div className="space-y-1">
            <h3 className="font-sans font-extrabold text-lg text-primary-navy">
              Ready to Begin!
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              No practice session scores recorded yet. Take a practice test or review road signs to see your category insights and track your learning progress here.
            </p>
          </div>
        </section>
      ) : (
        <section className="border-l-4 border-green-600 bg-green-50/50 p-5 rounded-r-2xl border-y border-r border-green-100 flex items-start gap-3.5 shadow-xs animate-fade-in">
          <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5 stroke-[2.5px]" />
          <div className="space-y-1">
            <h3 className="font-sans font-extrabold text-lg text-primary-navy">
              Solid Foundation
            </h3>
            <p className="text-sm text-text-dark leading-relaxed">
              Fantastic work! Your scores are balanced. Keep practicing with quizzes or flashcards to maintain your readiness!
            </p>
          </div>
        </section>
      )}

      {/* Daily streak feedback tool */}
      <section className="border-l-4 border-safety-orange bg-safety-orange/5 p-5 rounded-r-2xl border-y border-r border-[#faece2]">
        <div className="flex items-start gap-4">
          <Lightbulb className="w-6 h-6 text-safety-orange-dark shrink-0 stroke-[2.5px] mt-0.5" />
          <div className="space-y-1.5 flex-1 select-none">
            <div className="flex items-center justify-between">
              <h4 className="font-sans font-black text-xs text-safety-orange-dark tracking-widest uppercase">
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
            <p className="text-sm text-text-dark leading-relaxed font-semibold animate-fade-in" key={activeTipIndex}>
              "{PRO_TIPS[activeTipIndex].tip}"
            </p>
            {stats.streakDays > 0 && (
              <p className="text-[11px] text-safety-orange-dark font-extrabold mt-1">
                🔥 You are currently on a {stats.streakDays}-day practice streak!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Dev Stats debug resetting tool */}
      <div className="pt-4 text-center max-w-md mx-auto">
        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="text-xs font-bold text-text-muted hover:text-red-650 py-1.5 px-3 border border-border-light rounded-lg hover:bg-red-50 hover:border-red-200 transition-all cursor-pointer inline-flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" /> Reset Practice History
          </button>
        ) : (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-3 text-left animate-fade-in shadow-2xs">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-4.5 h-4.5 text-red-650 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-bold text-red-950">Are you absolutely sure?</p>
                <p className="text-[11px] text-red-700 font-medium leading-relaxed">
                  This will permanently clear your readiness rating, practice test history, progress percentages, and streak counter. This action cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  onResetStats();
                  setShowResetConfirm(false);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg text-[11px] transition-colors cursor-pointer text-center"
              >
                Yes, reset everything
              </button>
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 bg-white border border-border-strong text-text-dark font-bold py-2 rounded-lg text-[11px] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

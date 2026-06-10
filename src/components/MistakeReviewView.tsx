/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Trash2, 
  Lock, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  Info, 
  ArrowRight,
  Database,
  RefreshCw,
  Trophy
} from 'lucide-react';
import { Question } from '../types';
import { 
  getMistakes, 
  clearMistakes, 
  SavedMistake
} from '../utils/mistakeReview';

interface MistakeReviewViewProps {
  onStartReview: () => void;
  onExit: () => void;
  proPassUnlocked: boolean;
  onTriggerProPass: () => void;
}

export const MistakeReviewView: React.FC<MistakeReviewViewProps> = ({
  onStartReview,
  onExit,
  proPassUnlocked,
  onTriggerProPass,
}) => {
  const [mistakes, setMistakes] = useState<SavedMistake[]>([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [expandedExplanation, setExpandedExplanation] = useState<{ [key: string]: boolean }>({});

  // Load mistakes status on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setMistakes(getMistakes());
  };

  const handleClearAll = () => {
    clearMistakes();
    loadData();
    setShowClearConfirm(false);
  };

  const toggleExplanation = (questionId: string) => {
    setExpandedExplanation(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const activeMistakes = mistakes.filter(m => !m.improved);
  const resolvedMistakes = mistakes.filter(m => m.improved);

  // Question preview subset (free plan limit to 3, premium gets all)
  const visibleMistakes = proPassUnlocked ? activeMistakes : activeMistakes.slice(0, 3);

  return (
    <div className="space-y-6 max-w-3xl mx-auto pb-24">
      {/* Encouragement & Count Header */}
      <div className="bg-gradient-to-br from-primary-navy to-[#0c3a6e] text-white p-6 rounded-2xl shadow-xs relative overflow-hidden border border-primary-navy-light/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,151,67,0.15),transparent_65%)] pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="bg-safety-orange/20 text-safety-orange border border-safety-orange/30 font-sans font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">
              PREMIUM STUDY MODULE
            </span>
            {proPassUnlocked && (
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                <Sparkles className="w-3 h-3 fill-emerald-300 border-none" /> UNLOCKED
              </span>
            )}
          </div>
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-tight leading-tight mt-1">
            Mistake Review
          </h2>
          <p className="text-sm md:text-base text-slate-250 font-medium max-w-xl">
            {activeMistakes.length > 0 
              ? `You have ${activeMistakes.length} active missed questions. Review these weak spots to improve your confidence before test day.`
              : `Flawless progress! You have zero uncorrected mistakes. Take a practice test to monitor your weak areas.`}
          </p>

          {/* Large dynamic mistake counter strip */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mt-4 text-left">
            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <span className="block text-[10px] text-slate-350 font-bold uppercase tracking-wider">Active Weak Points</span>
              <span className="font-sans font-black text-2xl md:text-3xl text-safety-orange leading-tight block mt-0.5">
                {activeMistakes.length}
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
              <span className="block text-[10px] text-slate-350 font-bold uppercase tracking-wider">Perfected / Resolved</span>
              <span className="font-sans font-black text-2xl md:text-3xl text-emerald-400 leading-tight block mt-0.5">
                {resolvedMistakes.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Actions bar */}
      {activeMistakes.length > 0 && (
        <div className="bg-white border border-border-light p-4 rounded-2xl shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
          <button
            onClick={onStartReview}
            className="w-full sm:w-auto px-6 py-4 bg-primary-navy hover:bg-primary-navy-light text-white font-sans font-black text-sm rounded-xl transition-all shadow-xs active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5 fill-white text-white border-none" />
            Start Mistake Review {activeMistakes.length > 3 && !proPassUnlocked ? '(3 Question Preview)' : `(${activeMistakes.length} Questions)`}
          </button>

          {!showClearConfirm ? (
            <button
              onClick={() => setShowClearConfirm(true)}
              className="w-full sm:w-auto px-4 py-3 border border-red-200 text-red-650 hover:bg-red-50 font-sans font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              Clear Mistakes
            </button>
          ) : (
            <div className="w-full sm:w-auto bg-red-50 border border-red-200 p-3 rounded-xl flex items-center gap-3 justify-between animate-fade-in">
              <span className="text-xs font-bold text-red-900 leading-tight">
                Clear all historical wrong answers?
              </span>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={handleClearAll}
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Yes, Clear
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mistakes Empty State Container */}
      {activeMistakes.length === 0 && (
        <div className="bg-white border border-border-light p-10 rounded-2xl text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
            <Trophy className="w-8 h-8" />
          </div>
          <div className="space-y-1.5 max-w-sm mx-auto">
            <h3 className="font-sans font-extrabold text-lg text-primary-navy">
              No Pending Mistakes!
            </h3>
            <p className="text-sm text-text-muted leading-normal font-medium">
              You are completely mistake-free! Incorrectly answered questions from diagnostic and practice quizzes will automatically populate here.
            </p>
          </div>
          <button
            onClick={onExit}
            className="px-6 py-3 bg-primary-navy hover:bg-primary-navy-light text-white font-extrabold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Explore Practice Tests
          </button>
        </div>
      )}

      {/* Free Tier Premium Upsell Card */}
      {!proPassUnlocked && activeMistakes.length > 0 && (
        <div className="p-0.5 bg-gradient-to-r from-safety-orange via-[#fe9743] to-[#ffb174] rounded-2xl shadow-sm border border-safety-orange/15 animate-fade-in">
          <div className="bg-white p-6 rounded-2xl space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-safety-orange/15 rounded-xl text-safety-orange-dark shrink-0">
                <Lock className="w-6 h-6 stroke-[2.5px]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-extrabold text-lg text-primary-navy flex items-center gap-1.5">
                  Unlock Mistake Review with Pro Pass <Sparkles className="w-4 h-4 text-safety-orange fill-safety-orange/25" />
                </h3>
                <p className="text-xs font-semibold text-[#804200] leading-none uppercase tracking-wider">
                  Targeted Drills • Focused Practice • Confidence Builder
                </p>
              </div>
            </div>

            <p className="text-sm text-text-dark leading-relaxed pl-1">
              Turn missed questions into focused practice. Practice the exact questions you missed, isolate your weak areas, and unlock unlimited attempts to study efficiently before test day with the Pro Pass.
            </p>

            {/* Premium feature list benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1 pt-1.5 text-xs font-bold text-[#3a4f66]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-orange fill-safety-orange/10 shrink-0" />
                Review all {activeMistakes.length} mistakes (currently limited to 3)
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-orange fill-safety-orange/10 shrink-0" />
                Custom progress tracking &amp; mastery indicators
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-orange fill-safety-orange/10 shrink-0" />
                Isolates and removes resolved questions
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-safety-orange fill-safety-orange/10 shrink-0" />
                Unlimited mistake review sessions
              </div>
            </div>

            {/* Call to Actions with developer simulated bypass */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-slate-100">
              <button
                onClick={onTriggerProPass}
                className="flex-1 py-3 px-5 bg-gradient-to-r from-safety-orange to-[#fe9743] hover:from-safety-orange-dark hover:to-safety-orange text-primary-navy font-sans font-black text-xs.5 uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-95 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Unlock Pro Pass - $9.99</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Saved Mistakes Question List Preview */}
      {activeMistakes.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-sans font-extrabold text-base text-primary-navy tracking-tight pl-1">
              {proPassUnlocked ? 'All Saved Mistakes' : `Question Preview (3 of ${activeMistakes.length} Loaded)`}
            </h3>
            <span className="text-xs font-semibold text-text-muted">
              {proPassUnlocked ? `${activeMistakes.length} Items Listed` : 'Free Tier Preview'}
            </span>
          </div>

          <div className="space-y-4">
            {visibleMistakes.map((mistake, index) => {
              const isExpanded = !!expandedExplanation[mistake.questionId];
              return (
                <div 
                  key={mistake.questionId}
                  className="bg-white border border-border-light rounded-2xl p-5 shadow-xs transition-shadow hover:shadow-xs relative overflow-hidden"
                >
                  {/* Side-stripe indicating wrong state */}
                  <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-red-400" />
                  
                  <div className="space-y-3 pl-2 text-left">
                    {/* Mistake Metadata Pill Tag */}
                    <div className="flex items-center justify-between flex-wrap gap-2 text-[10px]">
                      <span className="font-black tracking-normal uppercase bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                        MISTAKE #{index + 1}
                      </span>
                      <div className="flex gap-3 text-slate-400 font-bold">
                        <span>Missed: {mistake.missedCount} time{mistake.missedCount > 1 ? 's' : ''}</span>
                        <span>•</span>
                        <span>{new Date(mistake.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Question text */}
                    <p className="font-sans font-extrabold text-sm text-primary-navy leading-snug">
                      {mistake.questionText}
                    </p>

                    {/* Choices evaluation summary */}
                    <div className="space-y-2.5 pt-1">
                      {/* Incorrect choice */}
                      {mistake.userWrongOptionIndex !== -1 && mistake.userWrongOptionIndex < mistake.options.length ? (
                        <div className="flex items-start gap-2.5 p-3 rounded-xl border border-red-200/50 bg-red-50/20 text-xs text-red-900 leading-normal">
                          <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold block text-[10px] text-red-700/80 uppercase tracking-wider mb-0.5">Your Saved Answer</span>
                            <span>{mistake.options[mistake.userWrongOptionIndex]}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2.5 p-3 rounded-xl border border-red-200/50 bg-red-50/20 text-xs text-red-900 leading-normal">
                          <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-extrabold block text-[10px] text-red-700/80 uppercase tracking-wider mb-0.5">Your Saved Answer</span>
                            <span className="italic">Question skipped (No option selected)</span>
                          </div>
                        </div>
                      )}

                      {/* Correct Choice */}
                      <div className="flex items-start gap-2.5 p-3 rounded-xl border border-green-200/50 bg-green-50/20 text-xs text-green-900 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold block text-[10px] text-green-700/80 uppercase tracking-wider mb-0.5">Correct Answer</span>
                          <span>{mistake.options[mistake.correctOptionIndex]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Dropdown Description Guide */}
                    {mistake.explanation && (
                      <div className="pt-2 border-t border-slate-100">
                        <button
                          onClick={() => toggleExplanation(mistake.questionId)}
                          className="text-xs font-black text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide explanation and roadmap' : 'Show explanation and roadmap'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                        
                        {isExpanded && (
                          <div className="mt-3 p-3 bg-amber-50/30 border border-amber-200/40 rounded-xl leading-normal text-xs text-slate-600 font-medium animate-fade-in flex gap-2.5 items-start">
                            <Info className="w-4 h-4 text-safety-orange-dark shrink-0 mt-0.5" />
                            <div>
                              <strong className="block text-primary-navy mb-0.5">Official Handbook Guidance</strong>
                              {mistake.explanation}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

          {!proPassUnlocked && activeMistakes.length > 3 && (
            <div className="bg-slate-100/60 border border-dashed border-slate-350 p-6 rounded-2xl text-center space-y-2 text-slate-500 animate-pulse">
              <Lock className="w-7 h-7 text-slate-450 mx-auto" />
              <p className="font-bold text-sm tracking-tight text-slate-600">
                + {activeMistakes.length - 3} more missed questions locked
              </p>
              <p className="text-xs max-w-sm mx-auto font-medium">
                To unlock, review, and drill all your saved mistakes, activate Lifetime Premium Access above anytime!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

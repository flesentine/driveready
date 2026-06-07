/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle, RefreshCw, Trophy, ArrowRight, CornerDownRight, Landmark } from 'lucide-react';
import { Question } from '../types';

interface PracticeQuizViewProps {
  questions: Question[];
  onCompleteQuiz: (correctAnswers: number, totalQuestions: number) => void;
  onExit: () => void;
}

// Helper functions for shuffling questions & options
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function prepareQuizQuestions(rawQuestions: Question[]): Question[] {
  const shuffledQuestions = shuffleArray(rawQuestions);
  return shuffledQuestions.map(q => {
    const correctOptionText = q.options[q.correctOptionIndex];
    const shuffledOptions = shuffleArray(q.options);
    const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);
    return {
      ...q,
      options: shuffledOptions,
      correctOptionIndex: newCorrectIndex === -1 ? q.correctOptionIndex : newCorrectIndex
    };
  });
}

export const PracticeQuizView: React.FC<PracticeQuizViewProps> = ({
  questions,
  onCompleteQuiz,
  onExit,
}) => {
  const [shuffledQuestions] = useState<Question[]>(() => prepareQuizQuestions(questions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [spentQuestions, setSpentQuestions] = useState<{ index: number; isCorrect: boolean }[]>([]);

  // Safety checker
  if (shuffledQuestions.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-border-light text-center">
        <p className="text-text-muted">No test questions available.</p>
        <button onClick={onExit} className="mt-4 bg-primary-navy text-white px-5 py-2.5 rounded-xl text-sm font-bold">
          Return Home
        </button>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];
  const progressPercent = Math.round((currentIndex / shuffledQuestions.length) * 100);

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswerConfirmed) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmitOrContinue = () => {
    if (selectedOption === null) return;

    if (!isAnswerConfirmed) {
      // Validate
      const isCorrect = selectedOption === currentQuestion.correctOptionIndex;
      if (isCorrect) {
        setCorrectCount((prev) => prev + 1);
      }
      setSpentQuestions((prev) => [...prev, { index: currentIndex, isCorrect }]);
      setIsAnswerConfirmed(true);
    } else {
      // Move to next
      if (currentIndex + 1 < shuffledQuestions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setIsAnswerConfirmed(false);
      } else {
        // Complete Quiz!
        const finalCorrect = correctCount + (selectedOption === currentQuestion.correctOptionIndex ? 1 : 0);
        onCompleteQuiz(finalCorrect, shuffledQuestions.length);
      }
    }
  };

  const handleSkip = () => {
    if (isAnswerConfirmed) return;
    // Track as skipped / wrong
    setSpentQuestions((prev) => [...prev, { index: currentIndex, isCorrect: false }]);
    
    if (currentIndex + 1 < shuffledQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerConfirmed(false);
    } else {
      onCompleteQuiz(correctCount, shuffledQuestions.length);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-24 relative">
      
      {/* Progress Header */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="font-bold text-text-muted">
            Question {currentIndex + 1} of {shuffledQuestions.length}
          </span>
          <span className="font-extrabold text-primary-navy">
            {progressPercent}% Complete
          </span>
        </div>
        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div
            className="bg-safety-orange h-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card Structure */}
      <div className="bg-white border border-border-light rounded-2xl p-5 md:p-6 shadow-xs relative">
        
        {/* Category Tag Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 bg-slate-100 text-text-muted font-bold text-xs px-3 py-1.5 rounded-full border border-border-light">
            <span className="w-2 h-2 rounded-full bg-primary-navy" />
            {currentQuestion.category}
          </span>
        </div>

        {/* Question text */}
        <h2 className="font-sans font-extrabold text-lg md:text-xl text-primary-navy leading-snug mb-5">
          {currentQuestion.questionText}
        </h2>

        {/* Dynamic Image component if exists */}
        {currentQuestion.imageUrl && (
          <div className="rounded-xl overflow-hidden mb-5 border border-border-light bg-cool-bg max-h-56 flex items-center justify-center">
            <img
              alt="Contextual illustration for traffic scenario"
              src={currentQuestion.imageUrl}
              className="max-h-56 w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Multiple Choice List */}
        <div className="space-y-3" id="options-container">
          {currentQuestion.options.map((option, idx) => {
            let optionStyles = 'border-border-light hover:bg-cool-bg';
            let iconMarker = null;

            if (selectedOption === idx) {
              optionStyles = 'border-primary-navy bg-slate-50 font-medium';
            }

            if (isAnswerConfirmed) {
              if (idx === currentQuestion.correctOptionIndex) {
                optionStyles = 'border-green-600 bg-green-50/50 font-bold text-green-900';
                iconMarker = <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />;
              } else if (selectedOption === idx) {
                optionStyles = 'border-red-600 bg-red-50/50 text-red-900';
                iconMarker = <XCircle className="w-5 h-5 text-red-600 shrink-0" />;
              } else {
                optionStyles = 'border-border-light opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswerConfirmed}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left flex items-center justify-between p-4 border-2 rounded-xl transition-all active:scale-[0.99] min-h-[56px] text-sm md:text-base cursor-pointer ${optionStyles}`}
              >
                <span>{option}</span>
                {iconMarker ? (
                  iconMarker
                ) : (
                  <div
                    className={`w-5 h-5 rounded-full border-2 shrink-0 ${
                      selectedOption === idx ? 'border-primary-navy bg-primary-navy' : 'border-border-light'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* Adaptive Answer Explanation Box */}
      {isAnswerConfirmed && (() => {
        const colonIndex = currentQuestion.explanation.indexOf(':');
        let reference: string | null = null;
        let explanationText = currentQuestion.explanation;

        if (colonIndex !== -1 && colonIndex < 100) {
          const potentialRef = currentQuestion.explanation.substring(0, colonIndex).trim();
          const refUpper = potentialRef.toUpperCase();
          if (
            refUpper.includes('CALIFORNIA') ||
            refUpper.includes('HANDBOOK') ||
            refUpper.includes('CVC') ||
            refUpper.includes('VEHICLE') ||
            refUpper.includes('SECTION') ||
            refUpper.includes('LAW')
          ) {
            reference = potentialRef;
            explanationText = currentQuestion.explanation.substring(colonIndex + 1).trim();
          }
        }

        return (
          <div className="bg-[#fff9f4] border-l-4 border-safety-orange p-5 rounded-r-2xl border-y border-r border-[#faece2] animate-fade-in">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-safety-orange-dark shrink-0 mt-0.5" />
              <div className="space-y-1 w-full">
                <h4 className="font-sans font-bold text-sm text-safety-orange-dark">
                  Official Rules &amp; Guidance
                </h4>
                <p className="text-sm text-text-dark leading-relaxed">
                  {explanationText}
                </p>
                {reference && (
                  <div className="text-xs text-text-muted mt-3 pt-2.5 border-t border-[#faece2] flex items-center gap-1.5 font-medium">
                    <span className="bg-safety-orange/10 text-safety-orange-dark px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider">
                      Handbook Source
                    </span>
                    <span className="italic text-slate-600">{reference}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Footer Controls Action buttons */}
      <div className="flex gap-3 items-center sticky bottom-0 pt-4 pb-2 bg-cool-bg border-t border-border-light z-30">
        <button
          onClick={onExit}
          className="px-4 py-3 border-2 border-border-strong text-border-strong hover:bg-slate-100 rounded-full font-bold text-sm cursor-pointer"
        >
          Quit
        </button>
        
        {!isAnswerConfirmed && (
          <button
            onClick={handleSkip}
            className="flex-1 py-3 px-6 rounded-full border-2 border-primary-navy text-primary-navy hover:bg-slate-100 font-bold text-sm cursor-pointer"
          >
            Skip Question
          </button>
        )}

        <button
          disabled={selectedOption === null}
          onClick={handleSubmitOrContinue}
          className={`flex-1 py-3 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer ${
            selectedOption === null
              ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
              : 'bg-primary-navy hover:bg-primary-navy-light text-white'
          }`}
        >
          {isAnswerConfirmed ? 'Continue' : 'Validate Answer'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

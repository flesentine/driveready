/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { HelpCircle, RefreshCw, Check, Info, Landmark, HelpCircle as HelpIcon, ArrowRight, RotateCw } from 'lucide-react';
import { RoadSign } from '../types';

interface FlashcardsViewProps {
  signs: RoadSign[];
  startSignId?: string | null;
  onExit: () => void;
  onMasteredCard: () => void;
}

const getPracticalTipForSign = (id: string): string => {
  switch (id) {
    case 'stop':
      return 'The "3-second rule" is a great habit: stop completely behind the line, look left-right-left, and verify cross traffic has ceased before proceeding.';
    case 'yield':
      return 'Prepare to stop if there is any traffic on the intersecting road. You do not have the right-of-way; if you cause another vehicle to slow down, you failed to yield.';
    case 'no-entry':
      return 'If you pass this sign, pull over to the side of the road immediately and turn around when safe. It often marks one-way street exits or freeway off-ramps.';
    case 'one-way':
      return 'When turning onto a one-way street, always turn into the nearest lane going in your direction. Look out for "One Way" arrows at intersections.';
    case 'winding-road':
      return 'Slow down before the first curve rather than mid-bend. Multiple consecutive curves reduce visibility and traction, so keep firmly centered in your lane.';
    case 'slippery-when-wet':
      return 'Rain makes the road slickest during the first 10-15 minutes after it starts, as water mixes with surface oils. Reduce your speed by at least 5-10 mph.';
    case 'divided-highway':
      return 'Stay alert and transition your alignment to the right of the upcoming physical median divider. Be cautious of oncoming vehicles that might stray near the lane dividers.';
    case 'merging-traffic':
      return 'Do not stop on the freeway ramp unless absolutely necessary. Adjust your speed early to find a gap in traffic, and use your turn signal at the start of the ramp.';
    case 'two-way-traffic':
      return 'Get ready for oncoming vehicles sharing the road without a physical barrier. Stay strictly in the right-hand lane and do not cross the center yellow line.';
    case 'lane-ends':
      return 'Use the "zipper merge" rule: continue down the ending lane until the merge point, then take turns with vehicles in the continuous lane to merge smoothly.';
    case 'pedestrian-crossing':
      return 'Always look both ways at crosswalks even if the pedestrian light is off. In wet conditions or at night, slow down near intersections to spot pedestrians early.';
    case 'stop-ahead':
      return 'Begin easing off the accelerator immediately when you see this warning. This gives you plenty of stopping distance and prevents sudden, heavy braking.';
    case 'yield-ahead':
      return 'Expect to slow down or halt. Look far ahead to scan for approaching cross-traffic. If the path is clear, you may proceed smoothly without a full stop.';
    case 'no-left-turn':
      return 'Never make a last-second lane change to avoid this. Prohibited turn restrictions are often placed at high-collision intersections to protect pedestrians and cross-traffic.';
    case 'reverse-turn':
      return 'Decelerate to the advisory speed listed below the sign before initiating the first turn. Accelerate gently only once you are exiting the second curve.';
    case 't-intersection':
      return 'Vehicles on the terminating road must yield to all cross-traffic on the through-road. Stop completely if required, and proceed only when there is a major gap.';
    case 'added-lane':
      return 'You do not need to merge immediately, but you must remain alert for drivers in the adjacent lane who may attempt to change lanes or exit unexpectedly.';
    case 'end-divided-highway':
      return 'The physical barrier is ending ahead. Prepare to share a two-lane undivided road. Keep right and scan the horizon for oncoming traffic or drifting vehicles.';
    case 'slower-traffic-keep-right':
      return 'If you are driving below the normal flow of traffic or are being tailgated, move to the right-hand lane immediately to maintain safety and avoid blockage fines.';
    default:
      return 'Scan the road ahead, adjust your speed appropriately, and maintain safe following distances. Knowing this sign prevents costly driving test infractions.';
  }
};

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  signs,
  startSignId,
  onExit,
  onMasteredCard,
}) => {
  // Extract warning/practiceable signs
  const deck = useMemo(() => {
    return signs.filter(
      (s) => s.imageUrl && (s.imageUrl.includes('/') || s.imageUrl.includes('.') || s.imageUrl.startsWith('http'))
    );
  }, [signs]);

  const [deckIdx, setDeckIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [swipeDir, setSwipeDir] = useState<'left' | 'right' | null>(null);

  // If startSignId was supplied, locate it in the deck
  useEffect(() => {
    if (startSignId) {
      const idx = deck.findIndex((item) => item.id === startSignId);
      if (idx !== -1) {
        setDeckIdx(idx);
        setIsFlipped(false);
      }
    }
  }, [startSignId, deck]);

  const currentSign = deck[deckIdx] || deck[0];

  if (!currentSign) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-border-light text-center">
        <p className="text-text-muted">No flashcards available.</p>
        <button onClick={onExit} className="mt-4 bg-primary-navy text-white px-5 py-2.5 rounded-xl text-sm font-bold">
          Go Back
        </button>
      </div>
    );
  }

  const progressPercent = Math.round(((deckIdx + 1) / deck.length) * 100);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = (status: 'learning' | 'mastered') => {
    if (status === 'mastered') {
      onMasteredCard();
      setSwipeDir('right');
    } else {
      setSwipeDir('left');
    }

    setTimeout(() => {
      // Advance to next index circularly
      setDeckIdx((prev) => (prev + 1) % deck.length);
      setIsFlipped(false);
      setSwipeDir(null);
    }, 350);
  };

  return (
    <div className="max-w-md mx-auto space-y-5 select-none pb-8">
      
      {/* Session Progress Tracks */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold text-text-muted uppercase tracking-wider">
          <span>Practice Session</span>
          <span>
            Card {deckIdx + 1} of {deck.length}
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-safety-orange h-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Stack decoration for physical visual depth layout */}
      <div className="relative pt-4 px-4 pb-2">
        {/* Decorative cards stacked under */}
        <div className="absolute inset-x-8 top-1 bottom-1 bg-white border border-border-light rounded-2xl z-0 shadow-2xs opacity-40 translate-y-3" />
        <div className="absolute inset-x-6 top-2.5 bottom-2 bg-white border border-border-light rounded-2xl z-10 shadow-xs opacity-75 translate-y-1.5" />

        {/* Swipe Animation container around interactive flashcard */}
        <div
          className={`relative z-20 transition-all duration-300 transform ${
            swipeDir === 'left'
              ? '-translate-x-[150%] rotate-[-12deg] opacity-0'
              : swipeDir === 'right'
              ? 'translate-x-[150%] rotate-[12deg] opacity-0'
              : 'translate-x-0 rotate-0 opacity-100'
          }`}
        >
          {/* Flip card perspective structure */}
          <div className="perspective-1000 w-full aspect-[3/4] sm:aspect-[4/5] relative">
            <div
              onClick={handleFlip}
              className={`w-full h-full duration-500 transform preserve-3d cursor-pointer ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              
              {/* Front side card */}
              <div className={`backface-hidden absolute inset-0 bg-white border border-border-light rounded-2xl shadow-sm p-6 flex flex-col justify-between items-center text-center transition-opacity duration-300 ${
                isFlipped ? 'pointer-events-none opacity-0 z-0' : 'pointer-events-auto opacity-100 z-10'
              }`}>
                
                {/* Center graphic representation of current road sign */}
                <div className="w-full h-44 bg-cool-bg rounded-xl flex items-center justify-center border border-slate-100 p-4 shrink-0 pointer-events-none overflow-hidden">
                  <img
                    alt={currentSign.title}
                    src={currentSign.imageUrl}
                    className="max-h-full max-w-full object-contain pointer-events-none select-none"
                    style={currentSign.id === 'divided-highway' || currentSign.imageUrl.includes('divided_highway') ? { transform: 'scale(1.45)' } : undefined}
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2 flex-1 flex flex-col justify-center pointer-events-none">
                  <span className="text-[11px] font-black text-safety-orange-dark uppercase tracking-widest block">
                    ROAD RECALL
                  </span>
                  <h3 className="font-sans font-extrabold text-lg text-primary-navy px-1">
                    What does this sign indicate?
                  </h3>
                </div>

                <div className="flex flex-col items-center gap-1 shrink-0 pointer-events-none">
                  <RotateCw className="w-5 h-5 text-slate-300 animate-spin-slow" />
                  <p className="text-[11px] font-bold text-text-muted italic">
                    Tap card to reveal rule &amp; details
                  </p>
                </div>
              </div>

              {/* Back side card with corresponding rule explanation */}
              <div className={`backface-hidden rotate-y-180 absolute inset-0 bg-white border-2 border-primary-navy rounded-2xl shadow-md p-6 flex flex-col justify-between overflow-y-auto transition-opacity duration-300 ${
                isFlipped ? 'pointer-events-auto opacity-100 z-10' : 'pointer-events-none opacity-0 z-0'
              }`}>
                <div className="space-y-4">
                  
                  <div className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-safety-orange-dark stroke-[2.5px]" />
                    <span className="text-[11px] font-black text-safety-orange-dark uppercase tracking-widest">
                      Official Road Rule
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-xl text-primary-navy leading-none">
                      {currentSign.title}
                    </h3>
                    <p className="text-sm md:text-base text-text-dark leading-relaxed font-semibold">
                      {currentSign.description}
                    </p>
                  </div>

                  {/* Fact box block */}
                  <div className="bg-safety-orange bg-opacity-[0.05] border-l-4 border-safety-orange p-4 rounded-r-xl border-y border-r border-[#faece2]">
                    <span className="text-[11px] font-black text-safety-orange-dark block uppercase tracking-wider mb-0.5">
                      Key Practical Tip
                    </span>
                    <p className="text-xs text-text-muted italic leading-relaxed">
                      {getPracticalTipForSign(currentSign.id)}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-text-muted text-xs font-bold">
                    <Landmark className="w-3.5 h-3.5" />
                    <span>Section 4: {currentSign.category} Signage</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Multi toggle interactive control action buttons */}
      <div className="px-4">
        {!isFlipped ? (
          <button
            onClick={handleFlip}
            className="w-full py-3.5 bg-primary-navy hover:bg-primary-navy-light text-white font-bold rounded-xl shadow-md cursor-pointer text-sm tracking-wide transform active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
          >
            Reveal Direct Answer
          </button>
        ) : (
          <div className="flex gap-3 animate-fade-in">
            <button
              onClick={() => handleNext('learning')}
              className="flex-1 py-3 border-2 border-border-strong hover:bg-slate-50 text-border-strong font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Still Learning
            </button>
            <button
              onClick={() => handleNext('mastered')}
              className="flex-1 py-3 bg-primary-navy hover:bg-primary-navy-light text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95 transition-all"
            >
              <Check className="w-3.5 h-3.5 stroke-[3px]" /> Got It!
            </button>
          </div>
        )}
      </div>

      {/* Control Quit Action */}
      <div className="text-center pt-2">
        <button
          onClick={onExit}
          className="text-xs font-bold text-text-muted hover:text-primary-navy underline cursor-pointer"
        >
          Return to Dashboard
        </button>
      </div>

    </div>
  );
};

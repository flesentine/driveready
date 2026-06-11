/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { HelpCircle, RefreshCw, Check, Info, Landmark, HelpCircle as HelpIcon, ArrowRight, RotateCw, Lock, Sparkles } from 'lucide-react';
import { RoadSign } from '../types';
import { FREE_FLASHCARD_LIMIT, getVisibleFlashcardSigns } from '../utils/monetization';

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
    case 'wrong-way':
      return 'If you see this sign, immediately pull over to the side and check for safe turning opportunities. Correct your direction before continuing.';
    case 'no-u-turn':
      return 'Do not attempt a U-turn here, even if there are no vehicles. Instead, find a safe parking lot or block to turn around legally.';
    case 'no-right-turn':
      return 'Obey the turn restriction during its effective hours, usually marked on a plaque below the sign.';
    case 'railroad-crossing':
      return 'Never stop on the tracks. If traffic is heavy, wait until there is enough space on the other side of the tracks before you cross.';
    case 'railroad-emergency-info':
      return 'This blue sign holds the key phone number to contact dispatched railway personnel directly in case of an emergency.';
    case 'school-crossing':
      return 'Be highly alert for children and crosswalk crossing guards. Speed limit drops to 25 mph (or even 15 mph) when children are present.';
    case 'traffic-signal-ahead':
      return 'Ease your speed slightly and look ahead. This prepares you for a sudden yellow light change around blind curves.';
    case 'crossroad':
      return 'Watch closely for vehicles coming from both the left and right side streams, which might not yield or see you.';
    case 'directional-arrow':
      return 'Slow down significantly before entering the turn to ensure your vehicle stays within lane limits safely.';
    case 'curve':
      return 'Avoid braking while steering through the curve; slow down before the turn to maintain complete vehicle control.';
    case 'keep-right':
      return 'Stay to the right of the upcoming median obstruction, traffic island, or physical divider.';
    case 'do-not-pass':
      return 'A physical solid double yellow line usually begins where this sign is placed. Do not cross to pass vehicles.';
    case 'no-parking-any-time':
      return 'Do not park, stop, or stand here. Your vehicle is subject to immediate ticketing and towing.';
    case 'emergency-parking-only':
      return 'Illegal stops on highways cause severe hazard risk. Only stop if your car is mechanically disabled or in a genuine emergency.';
    case 'do-not-block-intersection':
      return 'Do not enter if you cannot fully cross. If the light changes, you will block cross traffic and violate blocking laws.';
    case 'left-turn-yield-on-green':
      return 'Under green lights, oncoming lanes have priority. Wait for a safety gap to clear before executing your left turn.';
    default:
      return 'Scan the road ahead, adjust your speed appropriately, and maintain safe following distances. Knowing this sign prevents costly driving test infractions.';
  }
};

const renderFlashcardSignVisual = (sign: RoadSign) => {
  if (sign.imageUrl && (sign.imageUrl.startsWith('http://') || sign.imageUrl.startsWith('https://') || sign.imageUrl.includes('/') || sign.imageUrl.includes('.'))) {
    const isDividedHighway = sign.id === 'divided-highway' || sign.imageUrl.includes('divided_highway');
    return (
      <img
        alt={sign.title}
        src={sign.imageUrl}
        className="max-h-full max-w-full object-contain pointer-events-none select-none"
        style={isDividedHighway ? { transform: 'scale(1.45)' } : undefined}
        referrerPolicy="no-referrer"
      />
    );
  }

  switch (sign.id) {
    case 'no-left-turn':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-2 rounded-xl">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="70" height="70" rx="4" fill="white" stroke="#000" strokeWidth="4" />
            <path d="M55 65 V 45 H 35 L 42 38 M 35 45 L 42 52" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="50" r="24" stroke="#DC2626" strokeWidth="6" fill="transparent" />
            <line x1="33" y1="33" x2="67" y2="67" stroke="#DC2626" strokeWidth="6" />
          </svg>
        </div>
      );
    case 'slower-traffic-keep-right':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-2 rounded-xl">
          <div className="border border-black text-center p-1.5 flex flex-col justify-center items-center w-20 h-24 bg-white shadow-xs">
            <span className="text-[7.5px] font-sans font-black text-black leading-tight tracking-tight uppercase">SLOWER</span>
            <span className="text-[7.5px] font-sans font-black text-black leading-tight tracking-tight uppercase">TRAFFIC</span>
            <span className="text-[7.5px] font-sans font-black text-black leading-tight tracking-tight uppercase">KEEP</span>
            <span className="text-[7.5px] font-sans font-black text-black leading-tight tracking-tight uppercase mt-1">RIGHT</span>
          </div>
        </div>
      );
    case 'divided-highway':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10 -mt-1" viewBox="0 0 100 100" fill="none">
              <path d="M 50 15 L 50 40" stroke="black" strokeWidth="6" strokeLinecap="round" />
              <path d="M 35 85 L 35 35 Q 35 15 50 15 Q 65 15 65 35 L 65 85" stroke="black" strokeWidth="6" strokeLinecap="round" fill="none" />
              <rect x="42" y="70" width="16" height="18" rx="3" fill="black" />
            </svg>
          </div>
        </div>
      );
    case 'end-divided-highway':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10 -mt-1" viewBox="0 0 100 100" fill="none">
              <path d="M 50 85 L 50 60" stroke="black" strokeWidth="6" strokeLinecap="round" />
              <path d="M 35 15 L 35 65 Q 35 85 50 85 Q 65 85 65 65 L 65 15" stroke="black" strokeWidth="6" strokeLinecap="round" fill="none" />
              <rect x="42" y="10" width="16" height="18" rx="3" fill="black" />
            </svg>
          </div>
        </div>
      );
    case 'two-way-traffic':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <path d="M 35 75 L 35 25 M 35 25 L 25 35 M 35 25 L 45 35" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 65 25 L 65 75 M 65 75 L 55 65 M 65 75 L 75 65" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      );
    case 'merging-traffic':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <path d="M 50 80 L 50 20 M 50 20 L 40 32 M 50 20 L 60 32" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 75 68 C 65 58 55 52 50 52" stroke="black" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );
    case 'lane-ends':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <path d="M 35 80 L 35 20" stroke="black" strokeWidth="7" strokeLinecap="round" />
              <path d="M 65 80 L 65 55 L 50 20" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      );
    case 'pedestrian-crossing':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="25" r="7" fill="black" />
              <path d="M 45 35 C 45 42 55 42 55 35 L 50 55 L 45 78 M 50 55 L 55 78" stroke="black" strokeWidth="8" strokeLinecap="round" fill="none" />
              <path d="M 35 50 Q 50 42 65 53" stroke="black" strokeWidth="7" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      );
    case 'stop-ahead':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
              <path d="M 50 85 L 50 54 M 50 54 L 42 62 M 50 54 L 58 62" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="50,15 62,15 71,24 71,36 62,45 50,45 41,36 41,24" fill="#DC2626" />
              <text x="56" y="34" fontSize="9" fontWeight="black" fill="white" textAnchor="middle" fontFamily="sans-serif">STOP</text>
            </svg>
          </div>
        </div>
      );
    case 'yield-ahead':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
              <path d="M 50 85 L 50 54 M 50 54 L 42 62 M 50 54 L 58 62" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="50,40 33,15 67,15" fill="#DC2626" />
              <polygon points="50,34 38,18 62,18" fill="white" />
            </svg>
          </div>
        </div>
      );
    case 'reverse-turn':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <path d="M 50 80 V 55 H 70 V 30 H 45" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 55 20 L 40 30 L 55 40" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      );
    case 't-intersection':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <path d="M 50 80 V 45 M 25 45 H 75" stroke="black" strokeWidth="10" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );
    case 'added-lane':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <path d="M 35 80 L 35 20 M 35 20 L 27 30 M 35 20 L 43 30" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 65 80 L 65 20 M 65 20 L 57 30 M 65 20 L 73 30" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 50 80 V 45" stroke="black" strokeWidth="4" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
      );
    case 'speed-limit-50':
      return (
        <div className="w-16 h-20 bg-white border-2 border-black p-1 flex flex-col items-center justify-center rounded-sm shadow-xs">
          <span className="text-[7px] font-sans font-black text-black leading-tight uppercase">SPEED</span>
          <span className="text-[7px] font-sans font-black text-black leading-tight uppercase -mt-0.5">LIMIT</span>
          <span className="text-2xl font-sans font-extrabold text-black tracking-tight mt-0.5">50</span>
        </div>
      );
    case 'wrong-way':
      return (
        <div className="w-24 h-12 bg-[#DC2626] border-2 border-white p-1 flex flex-col items-center justify-center rounded-xs shadow-xs">
          <span className="text-[10px] font-sans font-black text-white leading-none uppercase tracking-wider">WRONG</span>
          <span className="text-[10px] font-sans font-black text-white leading-none uppercase tracking-wider mt-0.5">WAY</span>
        </div>
      );
    case 'no-u-turn':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-2 rounded-xl">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="70" height="70" rx="4" fill="white" stroke="#000" strokeWidth="4" />
            <path d="M 38 65 V 45 Q 38 32 50 32 Q 62 32 62 45 V 65 M 31 55 L 38 65 L 45 55" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="50" cy="50" r="26" stroke="#DC2626" strokeWidth="6" fill="transparent" />
            <line x1="31.5" y1="31.5" x2="68.5" y2="68.5" stroke="#DC2626" strokeWidth="6" />
          </svg>
        </div>
      );
    case 'no-right-turn':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-2 rounded-xl">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="70" height="70" rx="4" fill="white" stroke="#000" strokeWidth="4" />
            <path d="M 40 65 V 45 H 65 M 57 38 L 65 45 L 57 52" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="50" cy="50" r="26" stroke="#DC2626" strokeWidth="6" fill="transparent" />
            <line x1="31.5" y1="31.5" x2="68.5" y2="68.5" stroke="#DC2626" strokeWidth="6" />
          </svg>
        </div>
      );
    case 'railroad-crossing':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-2 rounded-xl">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="38" fill="#FBBF24" stroke="#000" strokeWidth="3" />
            <line x1="23" y1="23" x2="77" y2="77" stroke="#000" strokeWidth="5" />
            <line x1="23" y1="77" x2="77" y2="23" stroke="#000" strokeWidth="5" />
            <text x="31" y="56" fontSize="16" fontWeight="900" fill="black" textAnchor="middle" fontFamily="sans-serif">R</text>
            <text x="69" y="56" fontSize="16" fontWeight="900" fill="black" textAnchor="middle" fontFamily="sans-serif">R</text>
          </svg>
        </div>
      );
    case 'railroad-emergency-info':
      return (
        <div className="w-18 h-22 bg-[#1E3A8A] border-2 border-white p-2 flex flex-col items-center justify-center rounded-sm shadow-xs text-white">
          <span className="text-[5px] font-sans font-black leading-tight text-center uppercase tracking-wider">REPORT EMERGENCY</span>
          <span className="text-[5px] font-sans font-black leading-tight text-center uppercase tracking-wider mt-0.5">OR OBSTRUCTION</span>
          <span className="text-[6px] font-sans font-extrabold text-amber-300 mt-1.5 leading-none">1-800-555-0199</span>
          <span className="text-[4px] font-mono font-medium text-slate-200 mt-1 leading-none">CROSSING 123 456 A</span>
        </div>
      );
    case 'school-crossing':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-2 rounded-xl">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,12 85,38 85,82 15,82 15,38" fill="#D9F99D" stroke="#000" strokeWidth="3" />
            <circle cx="43" cy="38" r="4.5" fill="black" />
            <path d="M 37 47 C 37 53 49 53 49 47 L 45 61 L 41 75 M 45 61 L 47 75" stroke="black" strokeWidth="5" strokeLinecap="round" />
            <circle cx="59" cy="44" r="4" fill="black" />
            <path d="M 54 52 C 54 58 64 58 64 52 L 60 65 L 57 75 M 60 65 L 62 75" stroke="black" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'traffic-signal-ahead':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <div className="w-5 h-11 bg-black rounded-md p-1 flex flex-col justify-between items-center border border-slate-700">
              <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse" />
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            </div>
          </div>
        </div>
      );
    case 'crossroad':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <path d="M 50 15 V 85 M 15 50 H 85" stroke="black" strokeWidth="9" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );
    case 'directional-arrow':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <path d="M 20 50 H 80 M 60 30 L 80 50 L 60 70" stroke="black" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      );
    case 'curve':
      return (
        <div className="relative w-16 h-16 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
              <path d="M 35 75 V 55 Q 35 35 60 35 H 70 M 55 20 L 70 35 L 55 50" stroke="black" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      );
    case 'keep-right':
      return (
        <div className="w-16 h-20 bg-white border-2 border-black p-1 flex flex-col items-center justify-center rounded-sm shadow-xs">
          <svg className="w-14 h-16" viewBox="0 0 100 100" fill="none">
            <path d="M 40 45 L 50 35 L 60 45 L 50 80 Z" fill="black" />
            <path d="M 35 80 L 35 55 Q 35 25 50 25 Q 65 25 65 55 L 65 75" stroke="black" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 57 65 L 65 75 L 73 65" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      );
    case 'do-not-pass':
      return (
        <div className="w-16 h-20 bg-white border-2 border-black p-2 flex flex-col items-center justify-center rounded-sm shadow-xs">
          <span className="text-[9px] font-sans font-black text-black leading-tight uppercase text-center">DO</span>
          <span className="text-[9px] font-sans font-black text-black leading-tight uppercase text-center">NOT</span>
          <span className="text-[9px] font-sans font-black text-black leading-tight uppercase text-center mt-1">PASS</span>
        </div>
      );
    case 'no-parking-any-time':
      return (
        <div className="w-16 h-20 bg-white border-2 border-[#DC2626] p-1.5 flex flex-col items-center justify-center rounded-sm shadow-xs">
          <span className="text-[8px] font-sans font-black text-[#DC2626] leading-none uppercase tracking-tight">NO</span>
          <span className="text-[8px] font-sans font-black text-[#DC2626] leading-none uppercase tracking-tight mt-0.5">PARKING</span>
          <span className="text-[6px] font-sans font-extrabold text-[#DC2626] leading-none uppercase mt-1">ANY</span>
          <span className="text-[6px] font-sans font-extrabold text-[#DC2626] leading-none uppercase mt-0.5">TIME</span>
          <span className="text-[6px] font-sans font-bold text-[#DC2626] scale-150 mt-1.5">&#8596;</span>
        </div>
      );
    case 'emergency-parking-only':
      return (
        <div className="w-16 h-20 bg-white border-2 border-[#16A34A] p-1 flex flex-col items-center justify-center rounded-sm shadow-xs">
          <span className="text-[6.5px] font-sans font-black text-[#16A34A] leading-tight text-center uppercase">EMERGENCY</span>
          <span className="text-[6.5px] font-sans font-black text-[#16A34A] leading-tight text-center uppercase">PARKING</span>
          <span className="text-[6.5px] font-sans font-black text-[#16A34A] leading-tight text-center uppercase mt-1">ONLY</span>
        </div>
      );
    case 'do-not-block-intersection':
      return (
        <div className="w-16 h-20 bg-white border-2 border-black p-1 flex flex-col items-center justify-center rounded-sm shadow-xs">
          <span className="text-[7.5px] font-sans font-black text-black leading-tight text-center uppercase">DO NOT</span>
          <span className="text-[7.5px] font-sans font-black text-black leading-tight text-center uppercase">BLOCK</span>
          <span className="text-[5.5px] font-sans font-bold text-slate-800 leading-tight text-center uppercase mt-0.5">INTERSECTION</span>
        </div>
      );
    case 'left-turn-yield-on-green':
      return (
        <div className="w-16 h-20 bg-white border-2 border-black p-1 flex flex-col items-center justify-center rounded-sm shadow-xs">
          <span className="text-[6.5px] font-sans font-black text-black leading-none text-center uppercase">LEFT TURN</span>
          <span className="text-[6.5px] font-sans font-black text-black leading-none text-center uppercase mt-0.5">YIELD</span>
          <span className="text-[6.5px] font-sans font-black text-black leading-none text-center uppercase mt-0.5">ON</span>
          <div className="w-3.5 h-3.5 rounded-full bg-[#22C55E] mt-1 mb-0.5" />
          <span className="text-[6.5px] font-sans font-black text-[#22C55E] leading-tight text-center uppercase">GREEN</span>
        </div>
      );
    default:
      return (
        <div className="relative w-14 h-14 bg-amber-400 rotate-45 border-2 border-black rounded shadow-xs flex items-center justify-center">
          <div className="-rotate-45 flex flex-col items-center justify-center w-full h-full">
            <span className="font-mono text-[7px] font-black text-black leading-none">DIRTY</span>
            <span className="font-mono text-[7px] font-black text-black leading-none mt-0.5">SIGN</span>
          </div>
        </div>
      );
  }
};

interface FlashcardsViewProps {
  signs: RoadSign[];
  startSignId?: string | null;
  onExit: () => void;
  onMasteredCard: () => void;
  proPassUnlocked?: boolean;
  onTriggerProPass?: () => void;
  freeLimit?: number;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  signs,
  startSignId,
  onExit,
  onMasteredCard,
  proPassUnlocked = false,
  onTriggerProPass = () => {},
  freeLimit = FREE_FLASHCARD_LIMIT,
}) => {
  // Under Free plan, only show up to local freeLimit signs of the library
  const allowedSigns = useMemo(() => {
    return freeLimit !== FREE_FLASHCARD_LIMIT
      ? (proPassUnlocked ? signs : signs.slice(0, freeLimit))
      : getVisibleFlashcardSigns(signs, proPassUnlocked);
  }, [signs, proPassUnlocked, freeLimit]);

  // Extract warning/practiceable signs
  const deck = useMemo(() => {
    return allowedSigns.filter((s) => s.imageUrl && s.imageUrl.trim() !== '');
  }, [allowedSigns]);

  const [deckIdx, setDeckIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [swipeDir, setSwipeDir] = useState<'left' | 'right' | null>(null);
  const [showLockedNotice, setShowLockedNotice] = useState(false);
  const [showEndUpsell, setShowEndUpsell] = useState(false);

  // If startSignId was supplied, locate it in the deck
  useEffect(() => {
    if (startSignId) {
      const idx = deck.findIndex((item) => item.id === startSignId);
      if (idx !== -1) {
        setDeckIdx(idx);
        setIsFlipped(false);
        setShowLockedNotice(false);
      } else {
        // startSignId not found in our subset deck! It must be a locked sign for free users.
        setShowLockedNotice(true);
        // Start current free deck at 0
        setDeckIdx(0);
        setIsFlipped(false);
      }
    } else {
      setShowLockedNotice(false);
    }
  }, [startSignId, deck]);

  const currentSign = deck[deckIdx] || deck[0];

  if (showEndUpsell) {
    return (
      <div className="max-w-md mx-auto bg-white border border-border-light rounded-3xl p-6 md:p-8 text-center space-y-6 shadow-md select-none">
        <div className="p-4 bg-amber-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-amber-500">
          <Sparkles className="w-8 h-8 fill-amber-500" />
        </div>
        <div className="space-y-2">
          <h3 className="font-sans font-black text-2xl text-primary-navy">
            Practice Deck Completed!
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            You have successfully completed the free practice set. Unlock the full deck of flashcards and all official California DMV road signs with Pro Pass.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-left space-y-2.5 text-xs font-semibold text-text-dark">
          <div className="flex items-start gap-2">
            <span className="text-amber-500 font-bold">✓</span>
            <span>Study all road signs & handbook samples</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-500 font-bold">✓</span>
            <span>Access full adaptive cram session flashcards</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-amber-500 font-bold">✓</span>
            <span>Review weak categories with smart feedback</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={onTriggerProPass}
            className="w-full bg-amber-500 hover:bg-amber-400 text-[#001025] font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 fill-[#001025]" />
            <span>Unlock all flashcards</span>
          </button>
          
          <button
            onClick={() => {
              setDeckIdx(0);
              setShowEndUpsell(false);
              setIsFlipped(false);
            }}
            className="w-full border border-slate-200 hover:bg-slate-50 text-text-muted font-bold py-2.5 rounded-xl text-xs transition-all cursor-pointer"
          >
            Restart Free Set
          </button>
        </div>

        <button
          onClick={onExit}
          className="text-xs font-bold text-text-muted hover:text-primary-navy underline block mx-auto cursor-pointer"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

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
      if (!proPassUnlocked && deckIdx === deck.length - 1) {
        // Instead of cycling, show the end-of-deck upsell!
        setShowEndUpsell(true);
      } else {
        // Advance to next index circularly
        setDeckIdx((prev) => (prev + 1) % deck.length);
        setIsFlipped(false);
      }
      setSwipeDir(null);
    }, 350);
  };

  return (
    <div className="max-w-md mx-auto space-y-5 select-none pb-8">
      
      {/* Locked notice if they came through deep linking to a locked card */}
      {showLockedNotice && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-3 text-left animate-fade-in relative z-50">
          <Lock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-xs font-black text-amber-800">
              Selected Sign Requires Pro Pass
            </p>
            <p className="text-[10px] text-amber-700 leading-snug mt-0.5">
              The road sign you selected is locked in the free plan. We have loaded the free practice deck instead.
            </p>
            <button
              onClick={onTriggerProPass}
              className="text-[10px] font-extrabold text-amber-800 underline mt-1.5 hover:text-amber-900 block"
            >
              Get Pro Pass to Unlock All Signs
            </button>
          </div>
          <button 
            onClick={() => setShowLockedNotice(false)}
            className="text-[10px] text-amber-500 hover:text-amber-700 font-bold shrink-0 px-1"
          >
            ✕
          </button>
        </div>
      )}

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
                  {renderFlashcardSignVisual(currentSign)}
                </div>

                <div className="space-y-2 flex-1 flex flex-col justify-center pointer-events-none">
                  <span className="text-[11px] font-black text-safety-orange-dark uppercase tracking-widest block font-bold">
                    ROAD RECALL
                  </span>
                  <h3 className="font-sans font-extrabold text-lg text-primary-navy px-1 font-bold">
                    What does this sign indicate?
                  </h3>
                </div>

                <div className="flex flex-col items-center gap-1 shrink-0 pointer-events-none">
                  <RotateCw className="w-5 h-5 text-slate-300 animate-spin-slow" />
                  <p className="text-[11px] font-bold text-text-muted italic animate-pulse">
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
                    <span className="text-[11px] font-black text-safety-orange-dark uppercase tracking-widest font-bold">
                      Official Road Rule
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-xl text-primary-navy leading-none font-bold">
                      {currentSign.title}
                    </h3>
                    <p className="text-sm md:text-base text-text-dark leading-relaxed font-semibold">
                      {currentSign.description}
                    </p>
                  </div>

                  {/* Fact box block */}
                  <div className="bg-safety-orange bg-opacity-[0.05] border-l-4 border-safety-orange p-4 rounded-r-xl border-y border-r border-[#faece2]">
                    <span className="text-[11px] font-black text-safety-orange-dark block uppercase tracking-wider mb-0.5 font-bold">
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

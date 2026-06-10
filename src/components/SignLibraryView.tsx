/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Info, AlertCircle, HelpCircle, ArrowRight, Lightbulb, Lock, Sparkles } from 'lucide-react';
import { RoadSign, SignCategory } from '../types';

// High-fidelity vector representation for simulated road signs
const renderSignVisual = (sign: RoadSign) => {
  // If we have a real URL or imported asset path, render it
  if (sign.imageUrl && (sign.imageUrl.startsWith('http://') || sign.imageUrl.startsWith('https://') || sign.imageUrl.includes('/') || sign.imageUrl.includes('.'))) {
    const isDividedHighway = sign.id === 'divided-highway' || sign.imageUrl.includes('divided_highway');
    return (
      <img
        alt={sign.title}
        src={sign.imageUrl}
        className="max-h-full max-w-full object-contain"
        style={isDividedHighway ? { transform: 'scale(1.45)' } : undefined}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Otherwise, render a high-fidelity vector representation based on ID
  switch (sign.id) {
    case 'no-left-turn':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-2 rounded-xl">
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="70" height="70" rx="4" fill="white" stroke="#000" strokeWidth="4" />
            {/* Arrow */}
            <path d="M55 65 V 45 H 35 L 42 38 M 35 45 L 42 52" stroke="#000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            {/* Red Prohibition Circle and Slash */}
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
              <path d="M 35 75 L 35 25 M 35 25 L 25 35 M 35 25 L 45 35" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 65 25 L 65 75 M 65 75 L 55 65 M 65 75 L 75 65" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
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

interface SignLibraryViewProps {
  signs: RoadSign[];
  goToFlashcardsForSign: (signId: string) => void;
  proPassUnlocked?: boolean;
  onTriggerProPass?: () => void;
  freeLimit?: number;
}

export const SignLibraryView: React.FC<SignLibraryViewProps> = ({
  signs,
  goToFlashcardsForSign,
  proPassUnlocked = false,
  onTriggerProPass = () => {},
  freeLimit = 12,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<SignCategory>('All');

  const categories: SignCategory[] = ['All', 'Regulatory', 'Warning', 'Information', 'Speed'];

  // Under Free plan, only show up to local freeLimit (12) signs of the library
  const allowedSigns = proPassUnlocked ? signs : signs.slice(0, freeLimit);

  // Filter logic based purely on category
  const filteredSigns = allowedSigns.filter((sign) => {
    return selectedCategory === 'All' || sign.category === selectedCategory;
  });

  const getStatusColor = (statusType: string) => {
    switch (statusType) {
      case 'Mandatory':
        return 'text-primary-navy bg-slate-100 hover:bg-slate-200';
      case 'Priority':
        return 'text-safety-orange-dark bg-amber-50 hover:bg-amber-100';
      case 'Prohibitory':
        return 'text-red-700 bg-red-50 hover:bg-red-100';
      case 'Limit':
        return 'text-slate-700 bg-slate-100 hover:bg-slate-200';
      case 'Warning':
        return 'text-amber-800 bg-amber-50 hover:bg-amber-100';
      case 'Information':
        return 'text-blue-700 bg-blue-50 hover:bg-blue-100';
      default:
        return 'text-text-muted bg-slate-100';
    }
  };

  return (
    <div className="space-y-6 pb-6 select-none">
      
      {/* Header Info */}
      <section className="space-y-2">
        <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-primary-navy leading-none">
          Road Sign Library
        </h2>
        <p className="text-sm md:text-base text-text-muted">
          Master the official road signs. Click any sign to study and test yourself with interactive flashcards.
        </p>
      </section>

      {/* Sticky Filter Bar Section */}
      <div className="sticky top-[64px] z-40 bg-[#f7fafc]/95 backdrop-blur-md py-3 border-b border-slate-100">
        {/* Categories Dynamic Chips */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none scroll-smooth">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-sans text-xs font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-primary-navy text-white shadow-xs scale-102 font-heavy'
                  : 'bg-white border border-border-light text-text-muted hover:bg-slate-50'
              }`}
            >
              {cat === 'All' ? 'All Signs' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Signs Grid Collection */}
      {filteredSigns.length === 0 ? (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-border-light p-10 text-center space-y-2 shadow-xs">
            <p className="text-sm text-text-muted font-medium">
              No signs found in this category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-primary-navy hover:underline cursor-pointer"
            >
              Show all signs
            </button>
          </div>
          
          {/* Always show Pro up-sell if results from category are empty due to Free limits */}
          {!proPassUnlocked && (
            <div
              onClick={onTriggerProPass}
              className="bg-[#fffdf5] border-2 border-dashed border-amber-300 rounded-3xl p-8 hover:border-amber-500 transition-all duration-300 cursor-pointer text-center relative max-w-xl mx-auto flex flex-col items-center justify-center space-y-4"
            >
              <div className="p-3 bg-amber-500/10 rounded-full text-amber-500">
                <Sparkles className="w-8 h-8 fill-amber-500" />
              </div>
              <div>
                <h3 className="font-sans font-black text-base text-primary-navy">
                  Unlock the Complete Road Sign Library
                </h3>
                <p className="text-xs text-text-muted mt-1 max-w-sm">
                  Free user access is limited to the first {freeLimit} standard signs. Unlock all California road signs & samples with Pro Pass.
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTriggerProPass();
                }}
                className="bg-amber-500 hover:bg-amber-400 text-[#001025] font-black py-2.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                Get Pro Pass Now
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" id="signs-grid">
          {filteredSigns.map((sign) => (
            <div
              key={sign.id}
              onClick={() => goToFlashcardsForSign(sign.id)}
              className="group bg-white border border-border-light rounded-2xl p-4 flex flex-col justify-between hover:shadow-md hover:border-primary-navy transition-all duration-300 cursor-pointer text-center relative"
            >
              <div className="space-y-3">
                 {/* Visual Graphic Representation (with fallbacks if requested limit) */}
                <div className="aspect-square bg-cool-bg rounded-xl flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-[1.03] overflow-hidden border border-slate-100">
                  {renderSignVisual(sign)}
                </div>

                <div>
                  <h3 className="font-sans font-extrabold text-sm md:text-base text-primary-navy group-hover:text-primary-navy-light transition-colors text-center font-bold">
                    {sign.title}
                  </h3>
                </div>
              </div>

              {/* Tag / Trigger review */}
              <div className="mt-3 flex justify-center">
                <span
                  className={`text-[9px] md:text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md transition-colors ${getStatusColor(
                    sign.statusType
                  )}`}
                >
                  {sign.status}
                </span>
              </div>
            </div>
          ))}

          {/* Inline Grid Upsell Card for Free Users */}
          {!proPassUnlocked && (
            <div
              onClick={onTriggerProPass}
              className="bg-[#fffdf5] border-2 border-dashed border-amber-300 rounded-2xl p-4 flex flex-col justify-between hover:border-amber-450 transition-all duration-300 cursor-pointer text-center relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 bg-amber-550/10 p-1.5 rounded-lg text-amber-600">
                <Lock className="w-3.5 h-3.5" />
              </div>
              <div className="space-y-3 flex-1 flex flex-col justify-center items-center py-4">
                <div className="p-3 bg-amber-500/10 rounded-full text-amber-500">
                  <Sparkles className="w-5 h-5 fill-amber-500" />
                </div>
                <div>
                  <h3 className="font-sans font-black text-sm text-[#002045] leading-tight">
                    Explore All Sample Signs
                  </h3>
                  <p className="text-[10px] text-text-muted mt-1 leading-snug">
                    Unlock the full California road sign library with Pro Pass.
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTriggerProPass();
                }}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-2 rounded-xl text-[10px] uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                Unlock Pro Pass
              </button>
            </div>
          )}
        </div>
      )}

      {/* Featured Shape Meaning Alert block */}
      <section className="bg-safety-orange/5 border-l-4 border-safety-orange rounded-r-2xl p-5 border-y border-r border-[#faece2] flex items-start gap-3.5">
        <Lightbulb className="w-6 h-6 text-safety-orange-dark shrink-0 mt-0.5 stroke-[2.5px]" />
        <div className="space-y-1">
          <h4 className="font-sans font-black text-xs text-safety-orange-dark tracking-widest uppercase">
            Key Rule: Shape Meaning
          </h4>
          <p className="text-sm text-text-dark leading-relaxed font-semibold">
            Triangles provide warnings, circles give orders (mandatory or prohibitory), and rectangles provide information. Understanding sign shapes helps you react faster!
          </p>
        </div>
      </section>

    </div>
  );
};

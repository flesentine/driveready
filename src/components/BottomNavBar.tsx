/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Home, ClipboardList, TrendingUp, BookOpen, User } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavBarProps {
  currentTab: TabType;
  setTab: (tab: TabType) => void;
  onOpenProfile: () => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentTab,
  setTab,
  onOpenProfile,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pt-2 pb-safe bg-white border-t border-border-light shadow-lg h-16 select-none">
      <button
        onClick={() => setTab('home')}
        className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all cursor-pointer ${
          currentTab === 'home'
            ? 'bg-primary-navy-light text-white font-bold px-5 scale-102 shadow-xs'
            : 'text-text-muted hover:bg-cool-bg'
        }`}
        id="navbar-home"
      >
        <Home className={`w-5 h-5 ${currentTab === 'home' ? 'stroke-[2.5px]' : 'stroke-2'}`} />
        <span className="text-[11px] font-bold mt-0.5 tracking-wide">Home</span>
      </button>

      <button
        onClick={() => setTab('tests')}
        className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all cursor-pointer ${
          currentTab === 'tests'
            ? 'bg-primary-navy-light text-white font-bold px-5 scale-102 shadow-xs'
            : 'text-text-muted hover:bg-cool-bg'
        }`}
        id="navbar-tests"
      >
        <ClipboardList className={`w-5 h-5 ${currentTab === 'tests' ? 'stroke-[2.5px]' : 'stroke-2'}`} />
        <span className="text-[11px] font-bold mt-0.5 tracking-wide">Tests</span>
      </button>

      <button
        onClick={() => setTab('stats')}
        className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all cursor-pointer ${
          currentTab === 'stats'
            ? 'bg-primary-navy-light text-white font-bold px-5 scale-102 shadow-xs'
            : 'text-text-muted hover:bg-cool-bg'
        }`}
        id="navbar-stats"
      >
        <TrendingUp className={`w-5 h-5 ${currentTab === 'stats' ? 'stroke-[2.5px]' : 'stroke-2'}`} />
        <span className="text-[11px] font-bold mt-0.5 tracking-wide">Stats</span>
      </button>

      <button
        onClick={() => setTab('library')}
        className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all cursor-pointer ${
          currentTab === 'library' || currentTab === 'flashcards'
            ? 'bg-primary-navy-light text-white font-bold px-5 scale-102 shadow-xs'
            : 'text-text-muted hover:bg-cool-bg'
        }`}
        id="navbar-signs"
      >
        <BookOpen className={`w-5 h-5 ${currentTab === 'library' || currentTab === 'flashcards' ? 'stroke-[2.5px]' : 'stroke-2'}`} />
        <span className="text-[11px] font-bold mt-0.5 tracking-wide">Signs</span>
      </button>

      <button
        onClick={onOpenProfile}
        className={`flex flex-col items-center justify-center px-4 py-1.5 rounded-full transition-all cursor-pointer ${
          currentTab === 'profile'
            ? 'bg-primary-navy-light text-white font-bold px-5 scale-102 shadow-xs'
            : 'text-text-muted hover:bg-cool-bg'
        }`}
        id="navbar-profile"
      >
        <User className={`w-5 h-5 ${currentTab === 'profile' ? 'stroke-[2.5px]' : 'stroke-2'}`} />
        <span className="text-[11px] font-bold mt-0.5 tracking-wide">Profile</span>
      </button>
    </nav>
  );
};

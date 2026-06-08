/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Menu, Award } from 'lucide-react';
import { TabType, UserStats } from '../types';

import californiaBadgeImg from '../assets/images/california_state_flag_badge_1780860429638.png';

interface HeaderProps {
  currentTab: TabType;
  setTab: (tab: TabType) => void;
  onOpenMenu?: () => void;
  onOpenProfile?: () => void;
  titleOverride?: string;
  onBack?: () => void;
  stats?: UserStats;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setTab,
  onOpenMenu,
  onOpenProfile,
  titleOverride,
  onBack,
  stats,
}) => {
  const currentName = stats?.userName || 'California Driver';
  const currentStreak = stats?.streakDays ?? 3;

  return (
    <header className="bg-white border-b border-border-light fixed top-0 left-0 w-full z-50 h-16 shadow-xs select-none">
      <div className="flex justify-between items-center w-full h-full px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {onBack ? (
            <button
              onClick={onBack}
              className="text-primary-navy hover:bg-cool-bg p-2 rounded-full transition-colors active:scale-95 duration-100 flex items-center justify-center cursor-pointer"
              aria-label="Go back"
              id="backButton"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={onOpenMenu}
              className="text-primary-navy hover:bg-cool-bg p-2 rounded-full transition-colors active:scale-95 duration-100 flex items-center justify-center cursor-pointer"
              aria-label="Open menu"
              id="menuButton"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}

          <div className="flex items-center gap-1.5">
            <h1
              onClick={() => setTab('home')}
              className="font-sans font-extrabold text-2xl tracking-tight text-primary-navy cursor-pointer select-none"
              id="brandTitle"
            >
              {titleOverride || 'DriveReady'}
            </h1>
            {!titleOverride && (
              <div 
                className="flex items-center bg-white border border-slate-200/80 p-0.5 rounded shadow-3xs select-none"
                title="California DMV 2026 Study Guide Alignment"
              >
                <img 
                  src={californiaBadgeImg} 
                  alt="California DMV Handbook Aligned" 
                  className="w-9 h-5.5 object-cover rounded-xs select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Active indicator showing dynamic streak value */}
          <div className="hidden sm:flex items-center gap-1 bg-accent-peach/30 text-safety-orange-dark px-2.5 py-1 rounded-full text-xs font-bold border border-accent-peach">
            <span>🔥 {currentStreak} Day Streak</span>
          </div>

          <div 
            onClick={onOpenProfile || (() => setTab('home'))} 
            className="w-10 h-10 rounded-full overflow-hidden border border-border-light shadow-2xs select-none cursor-pointer hover:opacity-90 active:scale-95 transition-all"
            title="Click to view My Profile"
          >
            <img
              alt="User profile photo"
              src={`https://api.dicebear.com/7.x/bottts/svg?seed=${currentName}`}
              className="w-full h-full object-cover select-none bg-slate-50"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

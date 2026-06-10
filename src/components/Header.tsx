/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Menu, Award, Sparkles } from 'lucide-react';
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
  proPassUnlocked?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setTab,
  onOpenMenu,
  onOpenProfile,
  titleOverride,
  onBack,
  stats,
  proPassUnlocked = false,
}) => {
  const currentName = stats?.userName || 'California Driver';
  const currentStreak = stats?.streakDays ?? 0;

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
              <>
                <div 
                  className="flex items-center bg-white border border-slate-200/80 p-0.5 rounded shadow-3xs select-none"
                  title="California DMV handbook-based practice"
                >
                  <img 
                    src={californiaBadgeImg} 
                    alt="California DMV handbook-based practice" 
                    className="w-9 h-5.5 object-cover rounded-xs select-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {proPassUnlocked && (
                  <span className="inline-flex items-center gap-0.5 bg-gradient-to-r from-amber-500 to-[#fe9743] text-slate-950 font-black text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full shadow-3xs border border-amber-600/10">
                    <Sparkles className="w-2.5 h-2.5 fill-slate-950" /> Pro Pass
                  </span>
                )}
              </>
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
            className={`w-10 h-10 rounded-full overflow-hidden select-none cursor-pointer hover:opacity-90 active:scale-95 transition-all flex items-center justify-center ${
              proPassUnlocked 
                ? "border-2 border-amber-400 ring-2 ring-amber-400/20 shadow-md bg-amber-50/50" 
                : "border border-border-light shadow-2xs bg-slate-100"
            }`}
            title="Click to view My Profile"
          >
            {stats?.selectedAvatar && stats.selectedAvatar !== 'initial' ? (
              <span className="text-xl leading-none">{stats.selectedAvatar}</span>
            ) : (
              <span className="font-sans font-black text-sm text-primary-navy leading-none">
                {currentName.trim() ? currentName.trim().charAt(0).toUpperCase() : 'C'}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

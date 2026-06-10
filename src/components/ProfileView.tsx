/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { User, Calendar, Shield, Award, MapPin, RefreshCw, Check, AlertTriangle, Sparkles, Lock, CheckCircle2 } from 'lucide-react';
import { UserStats, getUserLevelInfo } from '../types';
import californiaBadgeImg from '../assets/images/california_state_flag_badge_1780860429638.png';

interface ProfileViewProps {
  stats: UserStats;
  onChangeTestDays: (days: number | undefined) => void;
  onResetStats: () => void;
  onUpdateProfile?: (name: string) => void;
  onUpdateAvatar?: (avatar: string | undefined) => void;
  proPassUnlocked?: boolean;
  onTriggerProPass?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  stats,
  onChangeTestDays,
  onResetStats,
  onUpdateProfile,
  onUpdateAvatar,
  proPassUnlocked = false,
  onTriggerProPass = () => {},
}) => {
  const currentName = stats.userName || 'California Driver';
  const lvlInfo = getUserLevelInfo(stats);

  const [targetDays, setTargetDays] = useState<number | ''>(
    stats.testDaysLeft !== undefined ? stats.testDaysLeft : ''
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Reset confirmation state
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Profile Details Edit Form State
  const [editName, setEditName] = useState(currentName);
  const [profileSuccess, setProfileSuccess] = useState(false);

  const handleDaysChangeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (targetDays === '') {
      onChangeTestDays(undefined);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    } else if (targetDays >= 1 && targetDays <= 365) {
      onChangeTestDays(targetDays);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    }
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editName.trim() && onUpdateProfile) {
      onUpdateProfile(editName.trim());
      setProfileSuccess(true);
      setTimeout(() => setProfileSuccess(false), 2000);
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto pb-4 select-none animate-fade-in">
      
      {/* Profile Header card info */}
      <section className="bg-white border border-border-light rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-center gap-5">
        <div className={`w-20 h-20 rounded-full select-none relative shrink-0 flex items-center justify-center transition-all ${
          proPassUnlocked 
            ? "border-[3px] border-amber-400 ring-4 ring-amber-400/25 shadow-md bg-amber-50/50" 
            : "border-2 border-primary-navy shadow-sm bg-slate-100"
        }`}>
          {stats.selectedAvatar && stats.selectedAvatar !== 'initial' ? (
            <span className="text-4xl leading-none">{stats.selectedAvatar}</span>
          ) : (
            <span className="font-sans font-black text-3xl text-primary-navy leading-none">
              {currentName.trim() ? currentName.trim().charAt(0).toUpperCase() : 'C'}
            </span>
          )}
        </div>
        
        <div className="text-center sm:text-left space-y-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 justify-center sm:justify-start">
            <h3 className="font-sans font-black text-2xl text-primary-navy leading-none">
              {currentName}
            </h3>
            <span className={`sm:inline-block font-sans font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider ${lvlInfo.badgeBg} ${lvlInfo.badgeText}`}>
              Level {lvlInfo.level}: {lvlInfo.levelName}
            </span>
            {proPassUnlocked ? (
              <span className="sm:inline-flex items-center gap-1 font-sans font-black text-[10px] bg-amber-500 text-[#001025] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                <Sparkles className="w-2.5 h-2.5 fill-[#001025]" /> Pro Pass Active
              </span>
            ) : (
              <button 
                onClick={onTriggerProPass}
                className="sm:inline-flex items-center gap-1 font-sans font-black text-[10px] bg-slate-100 text-[#002045] hover:bg-amber-100 hover:text-[#001025] px-2.5 py-0.5 rounded-full uppercase tracking-wider transition-colors cursor-pointer border border-[#002045]/10 font-bold"
              >
                <Lock className="w-2.5 h-2.5" /> Get Pro Pass
              </button>
            )}
          </div>
          
          <p className="text-xs text-text-muted flex items-center justify-center sm:justify-start gap-1 font-medium">
            <MapPin className="w-3.5 h-3.5" /> California, USA
          </p>
        </div>
      </section>

      {/* Independent Study Progress Tracker Card */}
      <section className="bg-gradient-to-br from-primary-navy to-primary-navy-light text-white rounded-2xl p-6 shadow-sm space-y-4 relative overflow-hidden">
        {/* Subtle decorative watermark */}
        <div className="absolute right-0 bottom-0 opacity-10 select-none pointer-events-none translate-x-4 translate-y-4">
          <Award className="w-48 h-48 stroke-1" />
        </div>

        <div className="flex justify-between items-start border-b border-white/20 pb-2">
          <div>
            <h4 className="text-[10px] uppercase font-black tracking-widest text-[#86a0cd]">
              California DMV handbook-based practice
            </h4>
            <p className="text-sm font-bold tracking-tight">Independent Practice Tracker</p>
          </div>
          <Shield className="w-5 h-5 text-[#fe9743]" />
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 text-xs">
          <div>
            <p className="text-[#86a0cd] text-[10px] uppercase font-bold">Study Profile</p>
            <p className="font-semibold text-sm truncate">{currentName}</p>
          </div>
          <div>
            <p className="text-[#86a0cd] text-[10px] uppercase font-bold text-[#86a0cd]">Study Focus</p>
            <p className="font-semibold text-sm">Class C Permit</p>
          </div>
          <div>
            <p className="text-[#86a0cd] text-[10px] uppercase font-bold">Tests Taken</p>
            <p className="font-bold text-sm text-white">{stats.totalTestsTaken}</p>
          </div>
          <div>
            <p className="text-[#86a0cd] text-[10px] uppercase font-bold">Signs Mastered</p>
            <p className="font-bold text-sm text-white">{stats.masteredSignsCount || 0}</p>
          </div>
          <div>
            <p className="text-[#86a0cd] text-[10px] uppercase font-bold">Target Exam</p>
            <p className="font-bold text-sm text-white">
              {stats.testDaysLeft !== undefined ? `${stats.testDaysLeft} days away` : 'Not set'}
            </p>
          </div>
          <div>
            <p className="text-[#86a0cd] text-[10px] uppercase font-bold">Current Streak</p>
            <p className="font-bold text-sm text-white">
              {stats.streakDays} {stats.streakDays === 1 ? 'day' : 'days'} 🔥
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center bg-white/10 px-4 py-2.5 rounded-xl border border-white/10">
          <span className="text-[10px] font-bold text-[#86a0cd]">READINESS STATUS</span>
          <span className="text-[#fe9743] font-sans font-black text-sm tracking-tight text-right flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-safety-orange animate-pulse" />
            {stats.readinessScore}% Exam Ready
          </span>
        </div>
      </section>

      {/* Pro Pass Subscription / Entitlement Trigger Card */}
      <section className="bg-white border border-border-light rounded-2xl p-5 shadow-xs space-y-4">
        <h4 className="font-sans font-extrabold text-base text-primary-navy flex items-center gap-2">
          <Sparkles className="w-4.5 h-4.5 text-amber-500 fill-amber-500/20 stroke-2" />
          Pro Pass License
        </h4>
        
        {!proPassUnlocked ? (
          <div className="space-y-3">
            <p className="text-xs text-text-muted leading-relaxed font-semibold">
              You are currently on the Free Starter Plan. Unlock the <strong>Pro Pass</strong> for Lifetime Access to ALL study modes. No subscriptions, just a one-time unlock.
            </p>
            <div className="bg-orange-50/40 border border-orange-200/50 rounded-xl p-3.5 space-y-1.5 text-left">
              <span className="block text-[10px] font-black text-safety-orange uppercase tracking-wider">Free Starter Mode Locks:</span>
              <ul className="text-xs font-bold text-slate-700 space-y-1 pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-orange" />
                  <span>Mistake Review limited to 3 questions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-orange" />
                  <span>Advanced Test 14 and Test 15 locked</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onTriggerProPass}
              className="w-full bg-gradient-to-r from-amber-500 to-[#fe9743] hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black h-11 px-4 rounded-xl text-xs transition-colors cursor-pointer select-none flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4.5 h-4.5 fill-slate-950" />
              <span>Unlock Lifetime Pro Pass — $9.99</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3 text-left">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black text-emerald-950 uppercase tracking-wider mb-0.5 animate-pulse">Lifetime License Activated</p>
                <p className="text-xs text-emerald-800 font-semibold leading-relaxed">
                  Thank you! Your Pro Pass is fully active on this device. You have unlimited access to mock examinations, unlimited mistake list saves, and priority metrics.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Choose Avatar Card */}
      <section className="bg-white border border-border-light rounded-2xl p-5 shadow-xs space-y-4">
        <div>
          <h4 className="font-sans font-extrabold text-base text-primary-navy flex items-center gap-2">
            <Award className="w-5 h-4.5 text-[#fe9743] stroke-2" />
            Choose Avatar
          </h4>
          <p className="text-xs text-text-muted mt-1 font-semibold text-left">
            Pick a study icon for your DriverReady profile.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[
            { emoji: '🚗', name: 'Car' },
            { emoji: '🐻', name: 'California Bear' },
            { emoji: '🚦', name: 'Traffic Light' },
            { emoji: '🛣️', name: 'Road' },
            { emoji: '🪪', name: 'Permit Card' },
            { emoji: '⭐', name: 'Star' },
            { emoji: '🧭', name: 'Navigator' },
            { emoji: '🏁', name: 'Finish Flag' }
          ].map((item) => {
            const isSelected = stats.selectedAvatar === item.emoji;
            return (
              <button
                key={item.emoji}
                type="button"
                onClick={() => onUpdateAvatar && onUpdateAvatar(item.emoji)}
                title={item.name}
                className={`h-14 rounded-xl flex items-center justify-center text-3xl transition-all duration-200 active:scale-95 cursor-pointer relative ${
                  isSelected
                    ? "bg-orange-50 border-2 border-safety-orange ring-1 ring-safety-orange/20 scale-105 shadow-sm"
                    : "bg-slate-50 border border-slate-200 hover:bg-slate-100/70 hover:border-[#fe9743]/50"
                }`}
              >
                <span>{item.emoji}</span>
                {isSelected && (
                  <span className="absolute -top-1 -right-1 bg-safety-orange text-white rounded-full p-0.5 shadow-xs scale-90 border border-white">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => onUpdateAvatar && onUpdateAvatar(undefined)}
          className={`w-full h-11 px-4 font-sans font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none border border-dashed text-text-muted hover:bg-slate-50 ${
            !stats.selectedAvatar || stats.selectedAvatar === 'initial'
              ? 'border-primary-navy text-primary-navy bg-slate-50 font-black'
              : 'border-slate-300 hover:border-slate-400'
          }`}
        >
          <span>Use Initial</span>
          {(!stats.selectedAvatar || stats.selectedAvatar === 'initial') && (
            <span className="bg-primary-navy/10 text-primary-navy text-[9px] px-1.5 py-0.5 rounded uppercase font-black animate-pulse">Active</span>
          )}
        </button>
      </section>

      {/* Profile Details Personalization Form */}
      <section className="bg-white border border-border-light rounded-2xl p-5 shadow-xs space-y-4">
        <h4 className="font-sans font-extrabold text-base text-primary-navy flex items-center gap-2">
          <User className="w-4.5 h-4.5 text-safety-orange stroke-2" />
          Personal Details
        </h4>
        
        <form onSubmit={handleProfileSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-text-muted uppercase tracking-wider">
              First Name
            </label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="w-full h-11 px-3 bg-white border border-border-light rounded-xl font-bold font-sans text-primary-navy focus:outline-none focus:ring-1 focus:ring-primary-navy text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-navy hover:bg-primary-navy-light text-white font-bold h-11 px-4 rounded-xl text-xs transition-colors cursor-pointer select-none active:scale-[0.98]"
          >
            Save Profile Details
          </button>

          {profileSuccess && (
            <p className="text-xs text-green-600 font-bold animate-fade-in flex items-center gap-1 py-1">
              <Check className="w-4 h-4" /> Profile details successfully updated!
            </p>
          )}
        </form>
      </section>

      {/* Targets and personalization parameters Form */}
      <section className="bg-white border border-border-light rounded-2xl p-5 shadow-xs space-y-4">
        <h4 className="font-sans font-extrabold text-base text-primary-navy flex items-center gap-2">
          <Calendar className="w-4.5 h-4.5 text-safety-orange stroke-2" />
          Test Target Settings
        </h4>
        
        <form onSubmit={handleDaysChangeSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-[10px] font-bold text-text-muted uppercase tracking-wider">
              Days left until your scheduled permit exam
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                max="365"
                value={targetDays}
                onChange={(e) => {
                  const val = e.target.value;
                  setTargetDays(val === '' ? '' : parseInt(val) || 0);
                }}
                placeholder="--"
                className="w-24 h-11 px-3 bg-white border border-border-light rounded-xl font-bold font-sans text-primary-navy focus:outline-none focus:ring-1 focus:ring-primary-navy"
              />
              <button
                type="submit"
                className="flex-1 bg-primary-navy hover:bg-primary-navy-light text-white font-bold h-11 px-4 rounded-xl text-xs transition-colors cursor-pointer select-none active:scale-[0.98]"
              >
                Save Exam Target Date
              </button>
            </div>
          </div>

          {savedSuccess && (
            <p className="text-xs text-green-600 font-bold animate-fade-in flex items-center gap-1 py-1">
              ✓ Exam countdown has been saved. DriveReady wishes you success!
            </p>
          )}
        </form>
      </section>

      {/* Driver Level & Progression Scale */}
      <section className="bg-white border border-border-light rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
          <Award className="w-5 h-5 text-[#fe9743] stroke-2" />
          <h4 className="font-sans font-extrabold text-base text-primary-navy">
            Permit Study Levels
          </h4>
        </div>
        
        <p className="text-xs text-text-muted leading-relaxed font-semibold">
          Your level corresponds to your consistent mileage and handbook familiarity. Clear practice quizzes and master signs to rank up!
        </p>

        {/* Level List */}
        <div className="space-y-3 pt-2">
          {[
            {
              lvl: 1,
              name: "Permit Seeker",
              criteria: "Starting point / baseline candidate",
              color: "bg-slate-150 text-slate-700 border-slate-300",
              desc: "Get started by launching your first practice test or viewing flashcards."
            },
            {
              lvl: 2,
              name: "Road Apprentice",
              criteria: "Completed ≥1 test OR Mastered ≥1 sign",
              color: "bg-blue-100 text-blue-800 border-blue-300",
              desc: "The safe journey begins. Excellent first milestones completed!"
            },
            {
              lvl: 3,
              name: "Safe Navigator",
              criteria: "Completed ≥3 tests AND Readiness ≥50%",
              color: "bg-amber-100 text-amber-800 border-amber-300",
              desc: "Building real highway safety knowledge and quick sign recognition."
            },
            {
              lvl: 4,
              name: "Asphalt Expert",
              criteria: "Completed ≥7 tests AND Readiness ≥75% AND Mastered ≥5 signs",
              color: "bg-indigo-100 text-indigo-800 border-indigo-300",
              desc: "Exceptional mastery of speed rules, permit laws, and warning situations."
            },
            {
              lvl: 5,
              name: "Master of the Road",
              criteria: "Completed ≥10 tests AND Readiness ≥90% AND Mastered ≥10 signs",
              color: "bg-emerald-100 text-emerald-800 border-emerald-300",
              desc: "Top 5% candidate. You are exceptionally prepared to ace the genuine test."
            }
          ].map((item) => {
            const isActive = lvlInfo.level === item.lvl;
            return (
              <div 
                key={item.lvl} 
                className={`p-3 rounded-xl border transition-all ${
                  isActive 
                    ? 'border-orange-200 bg-orange-50/20 ring-1 ring-orange-100/50' 
                    : 'border-slate-100 bg-white'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border ${item.color}`}>
                      Level {item.lvl}: {item.name}
                    </span>
                    {isActive && (
                      <span className="text-[10px] bg-safety-orange text-white px-2 py-0.5 rounded-full font-black animate-pulse uppercase leading-none">
                        Current Rank
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-text-muted">
                    {item.criteria}
                  </span>
                </div>
                <p className="text-[11px] text-[#475569] leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Current level status pointer */}
        {lvlInfo.nextLevelCriteria && (
          <div className="mt-2 bg-[#f8fafc] border border-slate-200/80 rounded-xl p-3 flex gap-2 items-start">
            <Check className="w-4 h-4 text-safety-orange shrink-0 mt-0.5 stroke-[2.5]" />
            <div className="text-left">
              <p className="text-[11px] font-black text-primary-navy uppercase tracking-wide leading-none mb-1">
                Next Rank Requirement:
              </p>
              <p className="text-[11px] text-text-muted font-bold leading-normal">
                {lvlInfo.nextLevelCriteria}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Danger Actions segment */}
      <section className="bg-white border border-border-light rounded-2xl p-5 shadow-xs space-y-3">
        <h4 className="font-sans font-bold text-xs text-red-600 tracking-wider uppercase">
          Administration &amp; Account
        </h4>
        
        <div className="pt-1 flex flex-col gap-2">
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="w-full text-left py-2.5 px-4 border border-dashed border-red-200 text-red-700 hover:bg-red-50 rounded-xl text-xs font-bold flex items-center justify-between cursor-pointer transition-colors"
            >
              <span>Reset practice progress and statistics</span>
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-3 animate-fade-in text-left">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4.5 h-4.5 text-red-650 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-red-950">Are you absolutely sure?</p>
                  <p className="text-[11px] text-red-700 font-medium leading-relaxed leading-normal">
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
                  className="px-4 bg-white border border-border-strong text-[#334155] font-bold py-2 rounded-lg text-[11px] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* California State DMV Handbook Alignment & Disclaimer Banner */}
      <section className="bg-gradient-to-r from-red-50/20 to-neutral-50/30 border border-slate-250 border-dashed rounded-2xl p-5 flex items-center gap-4 relative overflow-hidden select-none animate-fade-in" id="california-state-dmv-alignment-banner-bottom">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.02] rounded-full blur-2xl pointer-events-none" />
        <div className="w-16 h-10 flex-none border border-slate-200 p-0.5 rounded-lg bg-white overflow-hidden flex items-center justify-center">
          <img 
            src={californiaBadgeImg} 
            alt="California State Flag Badge" 
            className="w-full h-full object-contain select-none"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-1.5 flex-1 select-none">
          <div className="flex flex-wrap items-center gap-1.5 leading-none">
            <span className="font-sans font-black text-[8px] uppercase bg-slate-600 text-white px-1.5 py-0.5 rounded tracking-widest">
              Independent Practice
            </span>
            <span className="text-xs text-red-850 font-extrabold font-sans">
              Handbook-Based study tool
            </span>
          </div>
          <p className="text-[11px] text-text-muted leading-relaxed font-semibold">
            All practice materials are independent study tools based on the California Driver’s Handbook. DriveReady is an independent study tool and is not affiliated with or endorsed by the California DMV.
          </p>
        </div>
      </section>

    </div>
  );
};

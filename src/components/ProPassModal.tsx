/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { XCircle, CheckCircle2, Sparkles, RefreshCw, ArrowRight } from 'lucide-react';
import { setProPassUnlocked } from '../utils/proPass';

interface ProPassModalProps {
  onClose: () => void;
  onUnlocked: () => void;
}

export const ProPassModal: React.FC<ProPassModalProps> = ({
  onClose,
  onUnlocked,
}) => {
  const [simulationSuccess, setSimulationSuccess] = useState(false);

  const handleSimulateUnlock = () => {
    setProPassUnlocked(true);
    setSimulationSuccess(true);
    onUnlocked();
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-primary-navy/70 backdrop-blur-sm transition-opacity cursor-pointer" 
      />

      {/* Main modal container */}
      <div className="bg-white border border-slate-200 shadow-2xl rounded-3xl p-6 md:p-8 max-w-md w-full relative z-10 animate-scale-in text-left">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
          title="Close Modal"
        >
          <XCircle className="w-6 h-6 stroke-[1.5]" />
        </button>

        <div className="space-y-6">
          {/* Header Badge */}
          <div className="w-12 h-12 bg-safety-orange/10 text-safety-orange rounded-full flex items-center justify-center border border-safety-orange/20 shadow-xs">
            <Sparkles className="w-6 h-6 fill-safety-orange/15" />
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h3 className="font-sans font-extrabold text-2xl text-primary-navy tracking-tight leading-tight">
              Unlock Pro Pass
            </h3>
            <p className="text-sm font-medium text-text-muted leading-snug">
              Study smarter with premium DMV prep tools.
            </p>
          </div>

          {/* Pricing tier block */}
          <div className="p-4 bg-safety-orange/5 border border-safety-orange/20 rounded-2xl flex justify-between items-center">
            <div>
              <span className="block text-[10px] text-safety-orange-dark font-extrabold uppercase tracking-widest">Pricing Plan</span>
              <span className="font-sans font-black text-lg text-primary-navy">Lifetime Access</span>
            </div>
            <div className="text-right">
              <span className="font-sans font-black text-2xl text-primary-navy">$9.99</span>
              <span className="block text-[9px] text-[#804200] font-bold">One-time payment</span>
            </div>
          </div>

          {/* Features Bullets List */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-primary-navy uppercase tracking-wider pl-0.5">
              Premium Features Included:
            </h4>
            <div className="space-y-2.5">
              {[
                "Unlimited Mistake Review",
                "Focused weak spot practice",
                "Advanced progress insights",
                "Exam cram tools",
                "Future premium study modules"
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-700 leading-normal">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 fill-emerald-50 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Actions */}
          <div className="space-y-3 pt-2">
            <div className="space-y-1 bg-slate-50 border border-slate-150 p-3 rounded-2xl text-center">
              <button
                disabled
                className="w-full py-3 px-5 bg-slate-200 text-slate-500 font-sans font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-200 cursor-default flex items-center justify-center gap-1.5"
              >
                <span>Continue to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                🔒 Checkout Gateway Coming Soon
              </p>
            </div>

            {/* Simulated success alert inside modal */}
            {simulationSuccess && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold p-3 rounded-xl text-center animate-pulse">
                Pro Pass unlocked successfully! Reloading...
              </div>
            )}

            {/* Dev Only controls */}
            {import.meta.env.DEV && (
              <button
                onClick={handleSimulateUnlock}
                className="w-full py-2.5 border border-dashed border-amber-400 bg-amber-50/50 hover:bg-amber-50 text-amber-800 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Dev Only: Simulate Pro Pass</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

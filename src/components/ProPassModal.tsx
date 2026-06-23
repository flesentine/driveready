/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { XCircle, CheckCircle2, Sparkles, RefreshCw, ArrowRight, AlertCircle, Clock3 } from 'lucide-react';
import { devUnlockProPass, getProPassProduct, purchaseProPass, restorePurchases, PurchaseStatus } from '../services/purchaseService';
import { trackEvent } from '../utils/analytics';

interface ProPassModalProps {
  onClose: () => void;
  onUnlocked: () => void;
}

type ModalStatus = 'idle' | 'loading' | PurchaseStatus;

export const ProPassModal: React.FC<ProPassModalProps> = ({
  onClose,
  onUnlocked,
}) => {
  const [purchaseStatus, setPurchaseStatus] = useState<ModalStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [noticeMessage, setNoticeMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [displayPrice, setDisplayPrice] = useState('$4.99');

  useEffect(() => {
    let isActive = true;

    getProPassProduct().then((product) => {
      if (!isActive) {
        return;
      }

      setDisplayPrice(product.displayPrice);
    });

    return () => {
      isActive = false;
    };
  }, []);

  const finishUnlockedFlow = (message: string, eventName: 'pro_purchase_succeeded' | 'pro_restore_succeeded') => {
    setPurchaseStatus('success');
    setSuccessMessage(message);
    setNoticeMessage(null);
    setErrorMessage(null);
    trackEvent(eventName);
    onUnlocked();
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  const handleCheckout = async () => {
    setPurchaseStatus('loading');
    setErrorMessage(null);
    setNoticeMessage(null);
    setSuccessMessage(null);
    trackEvent('pro_purchase_started');

    const result = await purchaseProPass();

    if (result.status === 'success' && result.proPassUnlocked) {
      finishUnlockedFlow('Pro Pass unlocked successfully.', 'pro_purchase_succeeded');
      return;
    }

    if (result.status === 'cancelled') {
      setPurchaseStatus('cancelled');
      setNoticeMessage('Purchase cancelled. No charge was made.');
      trackEvent('pro_purchase_cancelled');
      return;
    }

    if (result.status === 'pending') {
      setPurchaseStatus('pending');
      setNoticeMessage('Purchase is pending approval. Pro Pass will unlock after the App Store confirms it.');
      trackEvent('pro_purchase_pending');
      return;
    }

    const msg = result.errorMessage || 'Purchase failed. Please try again.';
    setPurchaseStatus('error');
    setErrorMessage(msg);
    trackEvent('pro_purchase_failed', { error: msg });
  };

  const handleRestore = async () => {
    setPurchaseStatus('loading');
    setErrorMessage(null);
    setNoticeMessage(null);
    setSuccessMessage(null);
    trackEvent('pro_restore_started');

    const result = await restorePurchases();

    if (result.status === 'success' && result.proPassUnlocked) {
      finishUnlockedFlow('Pro Pass restored successfully.', 'pro_restore_succeeded');
      return;
    }

    if (result.status === 'pending') {
      setPurchaseStatus('pending');
      setNoticeMessage('Restore is pending with the App Store. Try again once the purchase is approved.');
      trackEvent('pro_restore_pending');
      return;
    }

    const msg = result.errorMessage || 'No previous Pro Pass purchase was found for this Apple ID.';
    setPurchaseStatus('error');
    setErrorMessage(msg);
    trackEvent('pro_restore_failed', { error: msg });
  };

  const handleDevUnlock = () => {
    const result = devUnlockProPass();

    if (result.proPassUnlocked) {
      finishUnlockedFlow('Dev-only local Pro Pass cache enabled.', 'pro_purchase_succeeded');
      return;
    }

    setPurchaseStatus('error');
    setErrorMessage(result.errorMessage || 'Dev unlock is unavailable.');
  };

  const isWorking = purchaseStatus === 'loading';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark backdrop */}
      <div
        onClick={isWorking ? undefined : onClose}
        className="fixed inset-0 bg-primary-navy/70 backdrop-blur-sm transition-opacity cursor-pointer"
      />

      {/* Main modal container */}
      <div className="bg-white border border-slate-200 shadow-2xl rounded-3xl p-6 md:p-8 max-w-md w-full relative z-10 animate-scale-in text-left">
        {/* Close Button */}
        {!isWorking && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
            title="Close Modal"
          >
            <XCircle className="w-6 h-6 stroke-[1.5]" />
          </button>
        )}

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
              Unlock full California DMV prep with premium practice tests, Mistake Review, Cram Mode, signs, and flashcards.
            </p>
          </div>

          {/* Pricing tier block */}
          <div className="p-4 bg-safety-orange/5 border border-safety-orange/20 rounded-2xl flex justify-between items-center">
            <div>
              <span className="block text-[10px] text-safety-orange-dark font-extrabold uppercase tracking-widest">Pricing Plan</span>
              <span className="font-sans font-black text-lg text-primary-navy">Lifetime Access</span>
            </div>
            <div className="text-right">
              <span className="font-sans font-black text-2xl text-primary-navy">{displayPrice}</span>
              <span className="block text-[9px] text-[#804200] font-bold">One-time payment • No subscription</span>
            </div>
          </div>

          {/* Features Bullets List */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-primary-navy uppercase tracking-wider pl-0.5">
              Premium Features Included:
            </h4>
            <div className="space-y-2.5">
              {[
                'Practice Tests 3-15 (No thresholds)',
                'Full Mistake Review (Unlimited)',
                'Exam Cram Mode (Algorithm-guided)',
                'Full California Road Sign Library',
                'Full Flashcard Practice Deck',
                'Smart Study Recommendations',
                'Future premium study modules',
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
            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                disabled={isWorking}
                className={`w-full py-3 px-5 text-white font-sans font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                  isWorking
                    ? 'bg-amber-400 cursor-wait opacity-80'
                    : 'bg-amber-500 hover:bg-amber-600 shadow-md active:scale-[0.98]'
                }`}
              >
                {isWorking ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Unlock Pro Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Restore Purchases Button */}
              <button
                type="button"
                onClick={handleRestore}
                disabled={isWorking}
                className="w-full py-1 text-center text-xs font-bold text-text-muted hover:text-primary-navy transition-colors hover:underline disabled:opacity-50 disabled:no-underline cursor-pointer"
              >
                Restore Purchases
              </button>
            </div>

            {/* Status Messages */}
            {noticeMessage && (
              <div className="bg-sky-50 border border-sky-200 text-sky-900 text-xs font-bold p-3 rounded-xl flex items-start gap-2.5">
                <Clock3 className="w-4 h-4 shrink-0 mt-0.5 text-sky-700" />
                <span>{noticeMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold p-3 rounded-xl flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold p-3 rounded-xl text-center animate-pulse">
                {successMessage}
              </div>
            )}

            {/* Dev Only controls */}
            {import.meta.env.DEV && (
              <button
                onClick={handleDevUnlock}
                disabled={isWorking}
                className="w-full py-2 border border-dashed border-amber-400 bg-amber-50/50 hover:bg-amber-50 text-amber-800 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Dev Only: Unlock Local Cache</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

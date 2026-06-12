/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Capacitor, registerPlugin } from '@capacitor/core';
import {
  clearCachedProPassUnlocked,
  getCachedProPassUnlocked,
  setCachedProPassUnlocked,
} from '../utils/proPass';

export const PRODUCT_IDS = {
  PRO_PASS_LIFETIME: 'driveready_pro_pass_lifetime',
} as const;

export type ProPassSource = 'store' | 'cached' | 'dev';
export type PurchaseStatus = 'success' | 'cancelled' | 'pending' | 'error';

export interface ProPassResult {
  proPassUnlocked: boolean;
  source: ProPassSource;
  status: PurchaseStatus;
  errorMessage?: string;
}

interface DriveReadyStoreKitPlugin {
  getEntitlements(): Promise<ProPassResult>;
  purchaseProPass(options: { productId: string }): Promise<ProPassResult>;
  restorePurchases(): Promise<ProPassResult>;
}

const DriveReadyStoreKit = registerPlugin<DriveReadyStoreKitPlugin>('DriveReadyStoreKit');
const NATIVE_PLUGIN_UNAVAILABLE_MESSAGE = 'Pro Pass purchase is unavailable in this build. Please update the app or try again later.';

function isNativeIosStore(): boolean {
  return Capacitor.isNativePlatform() && Capacitor.getPlatform() === 'ios';
}

function getStoreErrorMessage(error: any, fallbackMessage: string): string {
  const message = String(error?.message || '');
  const lowerMessage = message.toLowerCase();

  if (
    lowerMessage.includes('plugin is not implemented')
    || lowerMessage.includes('not implemented on ios')
    || lowerMessage.includes('drivereadystorekit')
  ) {
    return NATIVE_PLUGIN_UNAVAILABLE_MESSAGE;
  }

  return message || fallbackMessage;
}

function normalizeStoreResult(result: Partial<ProPassResult>): ProPassResult {
  return {
    proPassUnlocked: result.proPassUnlocked === true,
    source: result.source === 'dev' || result.source === 'cached' ? result.source : 'store',
    status: result.status ?? 'error',
    errorMessage: result.errorMessage,
  };
}

function applyStoreResult(result: ProPassResult): ProPassResult {
  if (result.source !== 'store') {
    return result;
  }

  if (result.status === 'success' && result.proPassUnlocked) {
    setCachedProPassUnlocked(true);
  } else if (result.status === 'success' && !result.proPassUnlocked) {
    clearCachedProPassUnlocked();
  }

  return result;
}

function storeUnavailableResult(action: 'check' | 'purchase' | 'restore'): ProPassResult {
  const actionLabel = action === 'check'
    ? 'Pro Pass entitlement checks'
    : action === 'purchase'
      ? 'Purchases'
      : 'Purchase restore';

  return {
    proPassUnlocked: false,
    source: 'store',
    status: 'error',
    errorMessage: `${actionLabel} require the iOS App Store build.`,
  };
}

/**
 * Retrieves store-confirmed entitlements on iOS. In development browser builds,
 * returns the local cache as a dev convenience only.
 */
export async function getEntitlements(): Promise<ProPassResult> {
  if (isNativeIosStore()) {
    try {
      return applyStoreResult(normalizeStoreResult(await DriveReadyStoreKit.getEntitlements()));
    } catch (error: any) {
      return {
        proPassUnlocked: false,
        source: 'store',
        status: 'error',
        errorMessage: getStoreErrorMessage(error, 'Unable to check Pro Pass entitlement.'),
      };
    }
  }

  if (import.meta.env.DEV) {
    return {
      proPassUnlocked: getCachedProPassUnlocked(),
      source: 'dev',
      status: 'success',
    };
  }

  clearCachedProPassUnlocked();
  return storeUnavailableResult('check');
}

/**
 * Starts the App Store purchase flow for Pro Pass.
 */
export async function purchaseProPass(): Promise<ProPassResult> {
  if (!isNativeIosStore()) {
    return import.meta.env.DEV
      ? {
          proPassUnlocked: false,
          source: 'dev',
          status: 'error',
          errorMessage: 'Use the dev-only unlock button for browser testing.',
        }
      : storeUnavailableResult('purchase');
  }

  try {
    return applyStoreResult(normalizeStoreResult(await DriveReadyStoreKit.purchaseProPass({
      productId: PRODUCT_IDS.PRO_PASS_LIFETIME,
    })));
  } catch (error: any) {
    return {
      proPassUnlocked: false,
      source: 'store',
      status: 'error',
      errorMessage: getStoreErrorMessage(error, 'Purchase failed. Please try again.'),
    };
  }
}

/**
 * Restores App Store purchases and re-checks the Pro Pass entitlement.
 */
export async function restorePurchases(): Promise<ProPassResult> {
  if (!isNativeIosStore()) {
    return import.meta.env.DEV
      ? {
          proPassUnlocked: false,
          source: 'dev',
          status: 'error',
          errorMessage: 'Restore purchases is available in the iOS App Store build.',
        }
      : storeUnavailableResult('restore');
  }

  try {
    return applyStoreResult(normalizeStoreResult(await DriveReadyStoreKit.restorePurchases()));
  } catch (error: any) {
    return {
      proPassUnlocked: false,
      source: 'store',
      status: 'error',
      errorMessage: getStoreErrorMessage(error, 'Restore failed. Please try again.'),
    };
  }
}

/**
 * Browser-only local bypass for development. This is guarded by Vite DEV and
 * intentionally separate from production purchase/restore paths.
 */
export function devUnlockProPass(): ProPassResult {
  if (!import.meta.env.DEV) {
    return {
      proPassUnlocked: false,
      source: 'dev',
      status: 'error',
      errorMessage: 'Dev unlock is not available in production.',
    };
  }

  setCachedProPassUnlocked(true);
  return {
    proPassUnlocked: true,
    source: 'dev',
    status: 'success',
  };
}

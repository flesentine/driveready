/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { isProPassUnlocked, setProPassUnlocked } from '../utils/proPass';

export const PRODUCT_IDS = {
  PRO_PASS_LIFETIME: "driveready_pro_pass_lifetime"
} as const;

export type PurchaseStatus = "idle" | "loading" | "success" | "cancelled" | "error";

export interface Entitlement {
  proPassUnlocked: boolean;
  source: "mock" | "store" | "cached";
}

/**
 * Retrieves the current user's entitlements. Uses cached local entitlement state initially.
 */
export async function getEntitlements(): Promise<Entitlement> {
  const isUnlocked = isProPassUnlocked();
  return {
    proPassUnlocked: isUnlocked,
    source: "cached",
  };
}

/**
 * Purchase Pro Pass (Lifetime).
 * Under DEV mode, mocks purchase success after a 1.5s delay.
 * Under production build, fails with a clear error indicating checkout is not yet enabled.
 */
export async function purchaseProPass(): Promise<Entitlement> {
  if (import.meta.env.DEV) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setProPassUnlocked(true);
        resolve({
          proPassUnlocked: true,
          source: "mock",
        });
      }, 1500);
    });
  } else {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Checkout is not enabled yet."));
      }, 1000);
    });
  }
}

/**
 * Restore previously purchased entitlements.
 * Looks for cached entitlements or simulated store state.
 */
export async function restorePurchases(): Promise<Entitlement> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isUnlocked = isProPassUnlocked();
      resolve({
        proPassUnlocked: isUnlocked,
        source: isUnlocked ? "store" : "cached",
      });
    }, 1200);
  });
}

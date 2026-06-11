/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Local storage is only a cache for store-confirmed Pro Pass entitlement.
 * Production code must verify with the App Store before trusting this value.
 */

const LOCAL_STORAGE_PRO_PASS_KEY = 'driveready_pro_pass_unlocked';
const LEGACY_PREMIUM_ACCESS_KEY = 'driveready_premium_access';

/**
 * Reads the cached Pro Pass entitlement state.
 */
export function getCachedProPassUnlocked(): boolean {
  try {
    const value = localStorage.getItem(LOCAL_STORAGE_PRO_PASS_KEY);
    return value === 'true';
  } catch {
    return false;
  }
}

/**
 * Stores a store-confirmed Pro Pass entitlement in the local cache.
 */
export function setCachedProPassUnlocked(unlocked: boolean): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_PRO_PASS_KEY, String(unlocked));
    localStorage.setItem(LEGACY_PREMIUM_ACCESS_KEY, String(unlocked));
  } catch (error) {
    console.error('Error setting local cached Pro Pass unlock state:', error);
  }
}

/**
 * Clears cached entitlement state when the store says the user is locked.
 */
export function clearCachedProPassUnlocked(): void {
  try {
    localStorage.removeItem(LOCAL_STORAGE_PRO_PASS_KEY);
    localStorage.removeItem(LEGACY_PREMIUM_ACCESS_KEY);
  } catch (error) {
    console.error('Error clearing local cached Pro Pass unlock state:', error);
  }
}

/**
 * Gets Pro Pass status string from cache.
 */
export function getProPassStatus(): 'locked' | 'unlocked' {
  return getCachedProPassUnlocked() ? 'unlocked' : 'locked';
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * CAUTION: This local storage state functions solely as a local cached entitlement state
 * for offline availability and performance. It is not the final authority for production subscriptions,
 * which should eventually be verified server-side or via a store API.
 * Keeps backward compatibility with existing keys.
 */

const LOCAL_STORAGE_PRO_PASS_KEY = 'driveready_pro_pass_unlocked';

/**
 * Check if the Pro Pass premium tier has been unlocked (reads from local cache).
 */
export function isProPassUnlocked(): boolean {
  try {
    const value = localStorage.getItem(LOCAL_STORAGE_PRO_PASS_KEY);
    return value === 'true';
  } catch {
    return false;
  }
}

/**
 * Set the Pro Pass unlock state cache.
 */
export function setProPassUnlocked(unlocked: boolean): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_PRO_PASS_KEY, String(unlocked));
    // Also sync the old mistake key for backward compatibility or dual-support
    localStorage.setItem('driveready_premium_access', String(unlocked));
  } catch (error) {
    console.error('Error setting local cached Pro Pass unlock state:', error);
  }
}

/**
 * Get Pro Pass status string from cache.
 */
export function getProPassStatus(): 'locked' | 'unlocked' {
  return isProPassUnlocked() ? 'unlocked' : 'locked';
}


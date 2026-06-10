/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// TODO: Replace localStorage Pro Pass flag with server-verified purchase entitlement before production payments launch.

const LOCAL_STORAGE_PRO_PASS_KEY = 'driveready_pro_pass_unlocked';

/**
 * Check if the Pro Pass premium tier has been unlocked.
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
 * Set the Pro Pass unlock state.
 */
export function setProPassUnlocked(unlocked: boolean): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_PRO_PASS_KEY, String(unlocked));
    // Also sync the old mistake key for backward compatibility or dual-support
    localStorage.setItem('driveready_premium_access', String(unlocked));
  } catch (error) {
    console.error('Error setting Pro Pass unlock state:', error);
  }
}

/**
 * Get Pro Pass status string.
 */
export function getProPassStatus(): 'locked' | 'unlocked' {
  return isProPassUnlocked() ? 'unlocked' : 'locked';
}

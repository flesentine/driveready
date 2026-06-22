/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, expect, it } from 'vitest';
import { getEffectiveProPassUnlocked } from './proPass';

describe('effective Pro Pass UI gating', () => {
  it('does not expose premium UI before entitlement refresh resolves', () => {
    expect(getEffectiveProPassUnlocked(false, true)).toBe(false);
  });

  it('does not expose premium UI after a failed native entitlement refresh', () => {
    expect(getEffectiveProPassUnlocked(true, false)).toBe(false);
  });

  it('exposes premium UI only after entitlements resolve unlocked', () => {
    expect(getEffectiveProPassUnlocked(true, true)).toBe(true);
  });
});

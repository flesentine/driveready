/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
  plugin: {
    getEntitlements: vi.fn(),
    getProPassProduct: vi.fn(),
    purchaseProPass: vi.fn(),
    restorePurchases: vi.fn(),
  },
  capacitor: {
    isNativePlatform: vi.fn(),
    getPlatform: vi.fn(),
  },
  cachedProPassUnlocked: false,
}));

vi.mock('@capacitor/core', () => ({
  Capacitor: mocks.capacitor,
  registerPlugin: vi.fn(() => mocks.plugin),
}));

vi.mock('../utils/proPass', () => ({
  clearCachedProPassUnlocked: vi.fn(() => {
    mocks.cachedProPassUnlocked = false;
  }),
  getCachedProPassUnlocked: vi.fn(() => mocks.cachedProPassUnlocked),
  setCachedProPassUnlocked: vi.fn((unlocked: boolean) => {
    mocks.cachedProPassUnlocked = unlocked;
  }),
}));

async function loadPurchaseService() {
  vi.resetModules();
  return import('./purchaseService');
}

describe('purchaseService entitlement checks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.cachedProPassUnlocked = false;
    mocks.capacitor.isNativePlatform.mockReturnValue(true);
    mocks.capacitor.getPlatform.mockReturnValue('ios');
    mocks.plugin.getEntitlements.mockReset();
  });

  it('clears a stale cached unlock when StoreKit reports locked', async () => {
    mocks.cachedProPassUnlocked = true;
    mocks.plugin.getEntitlements.mockResolvedValue({
      proPassUnlocked: false,
      source: 'store',
      status: 'success',
    });

    const { getEntitlements } = await loadPurchaseService();
    const result = await getEntitlements();

    expect(result).toMatchObject({
      proPassUnlocked: false,
      source: 'store',
      status: 'success',
    });
    expect(mocks.cachedProPassUnlocked).toBe(false);
  });

  it('stores a verified StoreKit unlock', async () => {
    mocks.plugin.getEntitlements.mockResolvedValue({
      proPassUnlocked: true,
      source: 'store',
      status: 'success',
    });

    const { getEntitlements } = await loadPurchaseService();
    const result = await getEntitlements();

    expect(result).toMatchObject({
      proPassUnlocked: true,
      source: 'store',
      status: 'success',
    });
    expect(mocks.cachedProPassUnlocked).toBe(true);
  });

  it('does not grant premium when the entitlement check fails', async () => {
    mocks.cachedProPassUnlocked = true;
    mocks.plugin.getEntitlements.mockRejectedValue(new Error('StoreKit unavailable'));

    const { getEntitlements } = await loadPurchaseService();
    const result = await getEntitlements();

    expect(result.proPassUnlocked).toBe(false);
    expect(result.source).toBe('store');
    expect(result.status).toBe('error');
    expect(mocks.cachedProPassUnlocked).toBe(true);
  });

  it('keeps the explicit web dev cache fallback', async () => {
    mocks.cachedProPassUnlocked = true;
    mocks.capacitor.isNativePlatform.mockReturnValue(false);
    mocks.capacitor.getPlatform.mockReturnValue('web');

    const { getEntitlements } = await loadPurchaseService();
    const result = await getEntitlements();

    expect(result).toMatchObject({
      proPassUnlocked: true,
      source: 'dev',
      status: 'success',
    });
    expect(mocks.plugin.getEntitlements).not.toHaveBeenCalled();
  });
});

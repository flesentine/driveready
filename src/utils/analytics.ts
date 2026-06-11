/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

type AnalyticsEvent =
  | "pro_paywall_opened"
  | "pro_purchase_started"
  | "pro_purchase_succeeded"
  | "pro_purchase_failed"
  | "pro_restore_started"
  | "pro_restore_succeeded"
  | "pro_restore_failed";

interface AnalyticsPayload {
  source?: "locked_test" | "cram_mode" | "sign_library" | "flashcards" | "mistake_review" | string;
  error?: string;
  [key: string]: any;
}

/**
 * Lightweight stub to track custom UI telemetry events.
 * Logs out to the console in DEV and safely no-ops in production.
 */
export function trackEvent(eventName: AnalyticsEvent, payload?: AnalyticsPayload): void {
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] %c${eventName}`, "color: #ff9800; font-weight: bold;", payload || "");
  }
  // Production analytics integration (e.g. Firebase Analytics, Mixpanel) would go here.
}

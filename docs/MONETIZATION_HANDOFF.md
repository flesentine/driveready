# DriveReady Monetization Handoff

This document records the current DriveReady monetization architecture after the frontend monetization pass. The frontend product model is considered v0.9 frozen. Do not redesign the app, tabs, visual style, paywall strategy, or Free/Pro product boundaries unless explicitly approved.

## Free vs Pro Rules

### Free users

Free users currently receive:

- Diagnostic / Practice Test 1 and Practice Test 2.
- Limited sign library access.
- Limited flashcard access.
- Basic readiness score.
- Mistake Review preview.

Implementation details:

- `src/utils/monetization.ts` exposes `FREE_TEST_GROUPS = [12, 13]`, which maps to Diagnostic / Practice Test 1 and Practice Test 2.
- `FREE_SIGN_LIMIT = 12` limits visible road signs for free users.
- `FREE_FLASHCARD_LIMIT = 12` limits visible flashcards for free users.
- Mistake Review shows a preview of the first 3 active mistakes for free users.

### Pro Pass users

Pro Pass users currently receive:

- Practice Tests 3-15.
- Full Mistake Review.
- Exam Cram Mode.
- Full sign library.
- Full flashcard deck.
- Smart study recommendations.
- Future premium study modules.

Implementation details:

- Passing `proPassUnlocked = true` unlocks Practice Tests 3-15 through `isPracticeTestUnlocked`.
- Passing `proPassUnlocked = true` returns the full sign and flashcard data sets through the monetization helpers.
- Pro Pass gates premium dashboard actions and upgrade calls to action throughout the frontend.

## Current Mocked Purchase Behavior

DriveReady does not currently integrate real Apple, Google, RevenueCat, or server-side entitlement verification.

The current purchase flow is mocked in `src/services/purchaseService.ts`:

- `PRODUCT_IDS.PRO_PASS_LIFETIME` is set to `driveready_pro_pass_lifetime`.
- `getEntitlements()` reads the local cached Pro Pass state and returns `source: "cached"`.
- `purchaseProPass()` simulates a successful purchase only in Vite dev mode.
- In dev mode, `purchaseProPass()` waits 1.5 seconds, writes the local Pro Pass cache, and returns a mocked unlocked entitlement.
- In production builds, `purchaseProPass()` waits 1 second and rejects with `Checkout is not enabled yet.`
- `restorePurchases()` waits 1.2 seconds, checks local cached entitlement state, and returns unlocked only if the cache already says Pro Pass is unlocked.

`src/components/ProPassModal.tsx` owns the modal states around this service:

- Purchase loading state.
- Restore loading state.
- Purchase success state.
- Restore success state.
- Purchase and restore error states.
- Dev-only bypass button in `import.meta.env.DEV`.

`src/utils/proPass.ts` is a local cache only. It is not production purchase authority.

## Future Store Replacement

The intended production replacement should keep the same frontend product boundaries while replacing the mocked purchase service with real store-backed entitlement behavior.

Recommended integration options:

- RevenueCat with Capacitor for a shared iOS / Android entitlement layer.
- Native StoreKit for iOS and Google Play Billing for Android if the app moves to platform-specific purchase code.

Expected production responsibilities:

- Replace mocked `purchaseProPass()` with a real checkout call for the lifetime Pro Pass product.
- Replace mocked `restorePurchases()` with real restore / sync purchases behavior.
- Replace cached-only `getEntitlements()` with store-backed entitlement fetches.
- Treat local storage as a cache for performance and offline availability, not as purchase authority.
- Verify entitlements with the store SDK, RevenueCat, or a trusted backend before unlocking Pro-only content.
- Preserve the existing `Entitlement` shape or migrate it intentionally so app-level gating remains centralized.

## Monetization Ownership

These files currently own monetization behavior:

- `src/utils/monetization.ts`: Free vs Pro content access constants and helpers for practice tests, sign library, and flashcards.
- `src/services/purchaseService.ts`: Purchase, restore, product id, and entitlement service abstraction. This is the intended swap point for RevenueCat, StoreKit, or Google Play Billing.
- `src/utils/proPass.ts`: Local cached Pro Pass unlock state only.
- `src/components/ProPassModal.tsx`: Upgrade modal UI and purchase / restore state handling.
- `src/utils/analytics.ts`: Dev-only analytics stub for paywall, purchase, and restore telemetry.
- `src/App.tsx`: Top-level Pro Pass state, paywall opening, gated navigation, and modal wiring.
- `src/components/DashboardView.tsx`: Dashboard premium prompts and basic free readiness presentation.
- `src/components/MistakeReviewView.tsx`: Free Mistake Review preview vs full Pro access.
- `src/components/SignLibraryView.tsx`: Free sign limit vs full Pro sign library.
- `src/components/FlashcardsView.tsx`: Free flashcard limit vs full Pro flashcard deck.
- `src/components/ProfileView.tsx`: Account/status messaging for Free vs Pro users.
- `src/components/Header.tsx`: Pro Pass status display.

## Do Not Change Without Explicit Approval

Do not change the following without explicit product approval:

- Free vs Pro product boundaries.
- The number of free practice tests.
- The free sign library limit.
- The free flashcard limit.
- Mistake Review preview behavior.
- Exam Cram Pro gating.
- Pro Pass pricing presentation.
- Paywall placement strategy.
- App tabs or navigation structure.
- Overall visual style or layout system.
- The expectation that `src/services/purchaseService.ts` is the purchase integration swap point.
- The expectation that `src/utils/proPass.ts` remains cache-only and not production authority.

## QA Checklist

### Free user

- Clear local storage or ensure `driveready_pro_pass_unlocked` is not `true`.
- Confirm Practice Test 1 is available.
- Confirm Practice Test 2 is available.
- Confirm Practice Tests 3 through 15 are locked and open the Pro Pass modal.
- Confirm the sign library shows only the free limited set.
- Confirm the flashcard deck shows only the free limited set.
- Confirm the dashboard shows basic readiness information and Pro upgrade prompts.
- Confirm Exam Cram Mode opens the Pro Pass modal instead of starting a cram session.
- Confirm Mistake Review shows only the preview behavior for active mistakes.

### Pro user

- Set Pro Pass unlocked through the dev purchase flow, dev bypass, or local cache.
- Confirm all 15 practice tests are available.
- Confirm the full sign library is visible.
- Confirm the full flashcard deck is visible.
- Confirm Mistake Review lists and starts review for all active mistakes.
- Confirm Exam Cram Mode starts when there are eligible mistake questions.
- Confirm the header/profile surfaces show Pro Pass status.

### Purchase mock

- Run the app in dev mode.
- Open the Pro Pass modal from a locked feature.
- Click the purchase call to action.
- Confirm the button enters a loading state.
- Confirm the mocked purchase succeeds after the delay.
- Confirm the modal shows success feedback and closes.
- Confirm Pro-only content unlocks without a full app redesign or navigation change.

### Restore mock

- With no local Pro Pass cache, click Restore Purchases and confirm the "No previous purchases found to restore." error.
- With local Pro Pass cache already set, click Restore Purchases and confirm restore succeeds.
- Confirm restore uses the same modal loading, success, and error states as purchase.

### Locked content

- Confirm locked tests, Exam Cram, full Mistake Review, full sign library, and full flashcard deck all route to the existing Pro Pass modal.
- Confirm locked content does not create alternate upgrade screens.
- Confirm locked states use the existing app visual language and copy style.
- Confirm production builds do not pretend checkout is live until a real store integration replaces the mock.

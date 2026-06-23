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

## Current StoreKit Purchase Behavior

DriveReady currently uses native iOS StoreKit 2 for the production Pro Pass purchase and restore flow.

The current purchase flow is implemented in `src/services/purchaseService.ts` and `ios/App/App/DriveReadyStoreKitPlugin.swift`:

- `PRODUCT_IDS.PRO_PASS_LIFETIME` is set to `driveready_pro_pass_lifetime`.
- Production iOS `getEntitlements()` calls the native Capacitor plugin and reads verified StoreKit current entitlements.
- Production iOS `purchaseProPass()` calls StoreKit for the lifetime Pro Pass product.
- A purchase unlocks Pro Pass only after StoreKit returns a verified transaction for `driveready_pro_pass_lifetime`.
- Pending purchases return a pending state and do not unlock immediately.
- Cancelled purchases return a cancelled state, do not unlock, and show non-scary cancellation messaging.
- `restorePurchases()` calls `AppStore.sync()` and then re-checks verified StoreKit current entitlements.
- Browser development builds expose a dev-only local unlock behind `import.meta.env.DEV`.
- Production non-native builds do not trust local storage as purchase authority.

`src/components/ProPassModal.tsx` owns the modal states around this service:

- Purchase loading state.
- Restore loading state.
- Purchase success state.
- Restore success state.
- Purchase and restore error states.
- Dev-only bypass button in `import.meta.env.DEV`.

`src/utils/proPass.ts` is a local cache only. It is not production purchase authority.

## App Store Connect Setup

Before App Store review or TestFlight sandbox validation:

- Create a non-consumable in-app purchase named Pro Pass.
- Set Product ID to `driveready_pro_pass_lifetime`.
- Set price to `$4.99`.
- Attach the in-app purchase to the app version before review submission.
- Add the required in-app purchase screenshot and review notes.
- Confirm bundle ID `com.flesentine.driveready`.
- Confirm paid agreements, tax, and banking are active.

## Monetization Ownership

These files currently own monetization behavior:

- `src/utils/monetization.ts`: Free vs Pro content access constants and helpers for practice tests, sign library, and flashcards.
- `src/services/purchaseService.ts`: Purchase, restore, product id, and entitlement service abstraction for the current native iOS StoreKit path. RevenueCat would be optional future work, not part of the current implementation.
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

- Complete a sandbox purchase, restore a previous sandbox purchase, or use the dev-only local unlock in a Vite dev build.
- Confirm all 15 practice tests are available.
- Confirm the full sign library is visible.
- Confirm the full flashcard deck is visible.
- Confirm Mistake Review lists and starts review for all active mistakes.
- Confirm Exam Cram Mode starts when there are eligible mistake questions.
- Confirm the header/profile surfaces show Pro Pass status.

### Sandbox purchase

- Install a TestFlight or sandbox build.
- Open the Pro Pass modal from a locked feature.
- Tap the purchase call to action.
- Confirm the Apple sandbox purchase sheet appears for Pro Pass at `$4.99`.
- Complete the sandbox purchase.
- Confirm Pro Pass unlocks only after the purchase succeeds.
- Confirm Practice Tests 3-15, full Mistake Review, Exam Cram Mode, full sign library, and full flashcard deck unlock.

### Pending, cancellation, and failure

- Start a purchase and cancel from the Apple sandbox purchase sheet.
- Confirm Pro Pass does not unlock.
- Confirm the app shows non-scary cancellation messaging.
- Test an unavailable or failed purchase condition if possible.
- Confirm Pro Pass does not unlock after failure.
- Confirm free-tier limits remain enforced.

### Restore purchase

- Delete and reinstall the app.
- Use the same sandbox Apple ID that purchased Pro Pass.
- Open the Pro Pass modal.
- Tap Restore Purchases.
- Confirm StoreKit restore/sync completes.
- Confirm Pro Pass unlocks and premium content is available.

### Dev-only local unlock

- Run the app in Vite dev mode.
- Open the Pro Pass modal from a locked feature.
- Click the dev-only local unlock control.
- Confirm the button enters a loading state.
- Confirm the modal shows success feedback and closes.
- Confirm Pro-only content unlocks for local development only.

### Locked content

- Confirm locked tests, Exam Cram, full Mistake Review, full sign library, and full flashcard deck all route to the existing Pro Pass modal.
- Confirm locked content does not create alternate upgrade screens.
- Confirm locked states use the existing app visual language and copy style.
- Confirm production builds use StoreKit on native iOS and do not expose the dev-only local unlock.

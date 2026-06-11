# Sandbox IAP Test Plan

Use this checklist before submitting DriveReady Pro Pass for App Store review or TestFlight validation.

## Product Details

- Product type: non-consumable lifetime unlock
- Product ID: `driveready_pro_pass_lifetime`
- Bundle ID: `com.flesentine.driveready`
- Price: `$4.99`
- User-facing name: Pro Pass

## App Store Connect Setup

- Create a non-consumable in-app purchase.
- Set Product ID to `driveready_pro_pass_lifetime`.
- Set price to `$4.99`.
- Add display name: `Pro Pass`.
- Add a short description explaining the lifetime unlock.
- Add the required screenshot for Apple review.
- Add review notes that explain where the paywall and Restore Purchases button are located.
- Attach the in-app purchase to the app version before submitting for review.
- Confirm the app bundle ID is `com.flesentine.driveready`.
- Confirm banking, tax, and agreements are active for paid apps/IAP.

## Clean Install Free-Tier Test

- Install a fresh TestFlight or sandbox build.
- Launch the app with no previous Pro Pass purchase on the sandbox Apple ID.
- Confirm Pro Pass is locked initially.
- Confirm Practice Tests 1-2 are available.
- Tap locked Practice Test 3.
- Confirm the Pro Pass paywall opens.
- Confirm Sign Library and Flashcards show free-tier limits.
- Confirm Mistake Review preview is limited to 3 questions.

## Successful Purchase Test

- From the Pro Pass paywall, tap `Unlock Pro Pass Now`.
- Confirm the Apple sandbox purchase sheet appears.
- Confirm the product shown is `Pro Pass` for `$4.99`.
- Complete the sandbox purchase.
- Confirm Pro Pass unlocks immediately.
- Confirm Practice Tests 3-15 are available.
- Confirm full Sign Library is available.
- Confirm full Flashcards are available.
- Confirm Cram Mode is available.
- Confirm full Mistake Review is available.

## Restart Entitlement Test

- Force quit the app.
- Reopen the app.
- Confirm Pro Pass remains unlocked after the entitlement refresh completes.
- Confirm premium areas remain available.

## Restore Purchase Test

- Delete and reinstall the app.
- Use the same sandbox Apple ID that purchased Pro Pass.
- Launch the app and open the Pro Pass paywall.
- Tap `Restore Purchases`.
- Confirm Pro Pass restores.
- Confirm premium areas unlock.

## Cancellation Test

- Start a Pro Pass purchase from the paywall.
- Cancel the Apple sandbox purchase sheet.
- Confirm Pro Pass does not unlock.
- Confirm the app shows non-scary cancellation messaging.
- Confirm free-tier limits remain enforced.

## Failure Or Unavailable Product Test

- Test with the App Store Connect IAP unavailable, misconfigured, or a sandbox account that cannot purchase.
- Tap `Unlock Pro Pass Now`.
- Confirm the app shows a friendly error.
- Confirm Pro Pass does not unlock.
- Confirm free-tier limits remain enforced.

## Local Cache Staleness Test

- Simulate or create a stale local Pro Pass cache without a matching App Store entitlement.
- Relaunch the app in a production/native build.
- Confirm the store entitlement check clears the stale cache when StoreKit reports the user is not entitled.
- Confirm premium areas are locked again.

## Native Asset Path Test

- Run `npm run build:native`.
- Run `npm run cap:sync`.
- Open and run the iOS app from Xcode.
- Confirm images, CSS, and JavaScript load in the native app.
- Confirm no `/driveready/` asset path is used in the native iOS build.

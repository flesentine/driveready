# App Store Readiness

Use this checklist before TestFlight or App Store submission.

## Pre-release checks

Run these from the repo root:

```sh
npm ci
npm run lint
npm run test:run
npm run validate:paid-launch
npm run check:coverage
npm run build:native
npx cap sync ios
```

For a native smoke build on macOS:

```sh
xcodebuild -project ios/App/App.xcodeproj -scheme App -destination 'platform=iOS Simulator,name=iPhone 16' build
```

If the exact simulator is not installed, select an available iPhone simulator from `xcrun simctl list devices available` and rerun the same command with that device name.

## StoreKit local testing

`ios/App/App/DriverReady.storekit` is kept in the project for Simulator testing. Do not commit machine-specific Xcode scheme paths. Developers who need local StoreKit testing should select the StoreKit configuration in Xcode on their own machine.

## Privacy manifest assumptions

The app-level privacy manifest declares no tracking and no collected data. Current app code stores progress, mistakes, and Pro Pass cache state locally on device. The analytics helper is a console-only stub and does not send telemetry. Production Pro Pass purchase and restore use the native StoreKit bridge; no AI service, advertising SDK, or external analytics SDK is included.

Revisit `ios/App/App/PrivacyInfo.xcprivacy` before release if the app adds network analytics, account identifiers, advertising, AI calls, or native APIs that require Apple required-reason declarations.

## Manual TestFlight purchase checks

- Fresh install with no Pro Pass purchase shows locked premium features after entitlement refresh.
- Purchase Pro Pass with a sandbox/TestFlight tester unlocks Tests 3-15, full sign library, full flashcards, Mistake Review, and Cram Mode.
- Restore Purchases unlocks Pro Pass for an Apple ID that owns it.
- Cancelled purchase leaves Pro Pass locked and shows a non-fatal cancellation state.
- Pending purchase leaves Pro Pass locked until App Store confirmation.
- Revoked or refunded purchase is locked again after entitlement refresh, and stale local cache is cleared.

## App Store Connect TestFlight checklist

- Confirm the Paid Applications agreement, tax, and banking are active.
- Confirm the non-consumable Pro Pass in-app purchase exists in App Store Connect.
- Confirm the in-app purchase Product ID is exactly `driveready_pro_pass_lifetime`.
- Confirm the in-app purchase status allows sandbox/TestFlight testing.
- Confirm the App Store privacy answer is "Data Not Collected" only if no user data leaves the device.
- Upload the archive from Xcode Organizer.
- Add the processed build to an internal TestFlight group.
- On a real device through TestFlight, confirm a fresh install starts locked/free.
- On a real device through TestFlight, confirm purchase success unlocks Pro Pass.
- On a real device through TestFlight, confirm Restore Purchases unlocks for an owning Apple ID.
- On a real device through TestFlight, confirm a cancelled purchase remains locked.
- On a real device through TestFlight, confirm a pending purchase remains locked until App Store confirmation.
- On a real device through TestFlight, confirm refund or revocation locks Pro Pass after entitlement refresh.
- On a real device through TestFlight, confirm app restart preserves unlock only after StoreKit entitlement check.

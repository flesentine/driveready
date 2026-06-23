# App Store Connect IAP Notes

## Pro Pass Product

- Product type: non-consumable
- Product ID: `driveready_pro_pass_lifetime`
- Bundle ID: `com.flesentine.driveready`
- User-facing name: Pro Pass
- Price: `$4.99` one-time payment

## Unlocks

Pro Pass permanently unlocks:

- Practice Tests 3-15
- Full California Sign Library
- Full Flashcards deck
- Cram Mode
- Full Mistake Review
- Future premium study modules listed in the paywall

## Suggested Reviewer Note

DriveReady includes a one-time non-consumable in-app purchase named Pro Pass.

To find the paywall, launch the app and tap a locked premium area such as Practice Test 3, Cram Mode, the full Sign Library, Flashcards, or full Mistake Review. The paywall includes an `Unlock Pro Pass` button and a `Restore Purchases` button.

The product ID is `driveready_pro_pass_lifetime`. The app bundle ID is `com.flesentine.driveready`.

## Testing Reminder

Real purchase and restore testing requires the App Store Connect in-app purchase record, a sandbox Apple ID or TestFlight tester, and an Apple-signed build. Browser development builds only expose the dev-only local unlock behind `import.meta.env.DEV`; production purchase and restore use the native StoreKit bridge.

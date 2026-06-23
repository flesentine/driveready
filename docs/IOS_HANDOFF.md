# iOS Handoff

DriveReady is currently iOS-first with a Capacitor iOS wrapper around the existing React/Vite app.

## Build the web app

```sh
npm run build:native
```

This writes the native-mode Vite production build to `dist`, which is the Capacitor `webDir`. The standard web build remains available as `npm run build`.

## Sync Capacitor

```sh
npm run cap:sync
```

This builds the web app and syncs the latest web assets and Capacitor config into the native iOS project.

## Open in Xcode

```sh
npm run ios:open
```

Use Xcode from there to choose a simulator or device and run the app.

## Current Status

This milestone includes the iOS Capacitor wrapper and a direct native StoreKit 2 purchase path through `ios/App/App/DriveReadyStoreKitPlugin.swift` and `src/services/purchaseService.ts`.

The Pro Pass product is a `$4.99` one-time non-consumable with Product ID `driveready_pro_pass_lifetime`. Local StoreKit Simulator testing uses `ios/App/App/DriverReady.storekit`.

There is no Android platform and no RevenueCat dependency currently. RevenueCat can be considered optional future work, but it is not part of the current implementation.

## Next Step

The next validation step is local Xcode StoreKit testing, followed by App Store Connect sandbox or TestFlight purchase and restore testing.

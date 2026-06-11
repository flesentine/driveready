# iOS Handoff

DriveReady now has a Capacitor iOS wrapper around the existing React/Vite app.

## Build the web app

```sh
npm run build
```

This writes the Vite production build to `dist`, which is the Capacitor `webDir`.

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

This milestone is iOS wrapper only. There is no real in-app purchase integration yet, and no RevenueCat, StoreKit, Google Play Billing, ads, Android platform, push notifications, or payment SDK has been added.

## Next Step

The next future milestone is RevenueCat / StoreKit entitlement integration for real Pro Pass ownership.

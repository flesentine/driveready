# Local StoreKit Testing

DriveReady includes a local StoreKit configuration for Simulator purchase testing:

- File: `ios/App/App/DriverReady.storekit`
- Product: Pro Pass Lifetime
- Product ID: `driveready_pro_pass_lifetime`
- Type: Non-Consumable
- Price: `$4.99`

The shared `App` scheme intentionally does not commit a machine-specific StoreKit configuration path. Developers who need local StoreKit testing should set it manually in Xcode:

1. Open `ios/App/App.xcworkspace`.
2. Choose Product > Scheme > Edit Scheme.
3. Select Run > Options.
4. Set StoreKit Configuration to `DriverReady.storekit`.
5. Run the app in Simulator and tap `Unlock Pro Pass`.

When the scheme uses this configuration, `Product.products(for:)` should return `driveready_pro_pass_lifetime`, and the Simulator should show Xcode's local StoreKit purchase sheet.

import { readFileSync } from 'node:fs';

type Check = {
  label: string;
  passed: boolean;
};

const files = {
  purchaseService: readFileSync('src/services/purchaseService.ts', 'utf8'),
  proPass: readFileSync('src/utils/proPass.ts', 'utf8'),
  proPassModal: readFileSync('src/components/ProPassModal.tsx', 'utf8'),
  app: readFileSync('src/App.tsx', 'utf8'),
  swiftPlugin: readFileSync('ios/App/App/DriveReadyStoreKitPlugin.swift', 'utf8'),
  bridgeViewController: readFileSync('ios/App/App/DriveReadyBridgeViewController.swift', 'utf8'),
  mainStoryboard: readFileSync('ios/App/App/Base.lproj/Main.storyboard', 'utf8'),
  xcodeProject: readFileSync('ios/App/App.xcodeproj/project.pbxproj', 'utf8'),
  viteConfig: readFileSync('vite.config.ts', 'utf8'),
  packageJson: readFileSync('package.json', 'utf8'),
};

const checks: Check[] = [
  {
    label: 'Production checkout placeholder removed',
    passed: !files.purchaseService.includes(['Checkout', 'is not', 'enabled yet'].join(' ')),
  },
  {
    label: 'Pro Pass product id is wired in web and native purchase code',
    passed: files.purchaseService.includes('driveready_pro_pass_lifetime')
      && files.swiftPlugin.includes('driveready_pro_pass_lifetime'),
  },
  {
    label: 'Native iOS purchase path uses Capacitor plugin and StoreKit 2',
    passed: files.purchaseService.includes("registerPlugin<DriveReadyStoreKitPlugin>('DriveReadyStoreKit')")
      && files.swiftPlugin.includes('import StoreKit')
      && files.swiftPlugin.includes('Product.products')
      && files.swiftPlugin.includes('Transaction.currentEntitlements'),
  },
  {
    label: 'Native iOS app explicitly registers DriveReadyStoreKit at bridge startup',
    passed: files.bridgeViewController.includes('class DriveReadyBridgeViewController: CAPBridgeViewController')
      && files.bridgeViewController.includes('override func capacitorDidLoad()')
      && files.bridgeViewController.includes('registerPluginInstance(DriveReadyStoreKitPlugin())')
      && files.mainStoryboard.includes('customClass="DriveReadyBridgeViewController"')
      && files.xcodeProject.includes('DriveReadyBridgeViewController.swift in Sources'),
  },
  {
    label: 'Native plugin registration failures are shown as friendly paywall errors',
    passed: files.purchaseService.includes('Pro Pass purchase is unavailable in this build. Please update the app or try again later.')
      && files.purchaseService.includes('plugin is not implemented')
      && files.purchaseService.includes('getStoreErrorMessage'),
  },
  {
    label: 'Local entitlement helpers are explicitly cache-only',
    passed: files.proPass.includes('getCachedProPassUnlocked')
      && files.proPass.includes('setCachedProPassUnlocked')
      && files.proPass.includes('clearCachedProPassUnlocked')
      && !files.proPass.includes('export function isProPassUnlocked'),
  },
  {
    label: 'App startup gates premium UI until entitlements resolve',
    passed: files.app.includes('entitlementsLoaded')
      && files.app.includes('effectiveProPassUnlocked')
      && files.app.includes('getEntitlements()')
      && files.app.includes('setEntitlementsLoaded(true)'),
  },
  {
    label: 'Dev-only unlock is gated behind import.meta.env.DEV',
    passed: files.proPassModal.includes('import.meta.env.DEV')
      && files.proPassModal.includes('Dev Only: Unlock Local Cache')
      && files.purchaseService.includes('export function devUnlockProPass'),
  },
  {
    label: 'Vite splits GitHub Pages and native asset bases',
    passed: files.viteConfig.includes("VITE_NATIVE_BUILD === 'true'")
      && files.viteConfig.includes("isNativeBuild ? './' : '/driveready/'"),
  },
  {
    label: 'Package scripts include web/native build, cap sync, iOS run, and validator',
    passed: files.packageJson.includes('"build:web"')
      && files.packageJson.includes('"build:native"')
      && files.packageJson.includes('"cap:sync": "npm run build:native && npx cap sync"')
      && files.packageJson.includes('"ios:run": "npm run build:native && npx cap run ios"')
      && files.packageJson.includes('"validate:paid-launch"'),
  },
];

const failed = checks.filter((check) => !check.passed);

console.log('Paid launch validation');
for (const check of checks) {
  console.log(`${check.passed ? 'PASS' : 'FAIL'} ${check.label}`);
}

console.log('\nManual App Store/TestFlight checklist');
[
  'Clean install starts as a free user.',
  'Locked tests open the Pro Pass paywall.',
  'Successful sandbox purchase unlocks Practice Tests 3-15 and premium libraries.',
  'App restart keeps Pro Pass unlocked after the entitlement check completes.',
  'Restore Purchases unlocks Pro Pass on a fresh install for the same sandbox Apple ID.',
  'Cancelled purchase does not unlock Pro Pass.',
  'Failed purchase does not unlock Pro Pass.',
  'A localStorage-only fake unlock is cleared after a store entitlement check reports locked.',
  'Native iOS build loads assets correctly with the ./ Vite base.',
].forEach((item) => console.log(`- ${item}`));

if (failed.length > 0) {
  process.exitCode = 1;
}

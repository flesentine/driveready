import Capacitor
import UIKit

@objc(DriveReadyBridgeViewController)
class DriveReadyBridgeViewController: CAPBridgeViewController {
    override func capacitorDidLoad() {
        super.capacitorDidLoad()

        bridge?.registerPluginInstance(DriveReadyStoreKitPlugin())
    }
}

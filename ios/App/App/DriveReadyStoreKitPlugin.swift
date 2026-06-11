import Capacitor
import Foundation
import StoreKit

@objc(DriveReadyStoreKitPlugin)
public class DriveReadyStoreKitPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "DriveReadyStoreKitPlugin"
    public let jsName = "DriveReadyStoreKit"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getEntitlements", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "purchaseProPass", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "restorePurchases", returnType: CAPPluginReturnPromise),
    ]

    private let proPassProductId = "driveready_pro_pass_lifetime"

    @objc func getEntitlements(_ call: CAPPluginCall) {
        Task {
            let unlocked = await hasVerifiedProPassEntitlement()
            resolve(call, unlocked: unlocked, status: "success")
        }
    }

    @objc func purchaseProPass(_ call: CAPPluginCall) {
        let productId = call.getString("productId") ?? proPassProductId

        Task {
            do {
                guard let product = try await Product.products(for: [productId]).first else {
                    resolve(call, unlocked: false, status: "error", errorMessage: "Pro Pass is not available from the App Store yet.")
                    return
                }

                let result = try await product.purchase()

                switch result {
                case .success(let verification):
                    let transaction = try checkVerified(verification)
                    guard transaction.productID == proPassProductId, transaction.revocationDate == nil else {
                        resolve(call, unlocked: false, status: "error", errorMessage: "The App Store purchase could not be verified.")
                        return
                    }

                    await transaction.finish()
                    resolve(call, unlocked: true, status: "success")
                case .userCancelled:
                    resolve(call, unlocked: false, status: "cancelled")
                case .pending:
                    resolve(call, unlocked: false, status: "pending")
                @unknown default:
                    resolve(call, unlocked: false, status: "error", errorMessage: "The App Store returned an unknown purchase result.")
                }
            } catch {
                resolve(call, unlocked: false, status: "error", errorMessage: error.localizedDescription)
            }
        }
    }

    @objc func restorePurchases(_ call: CAPPluginCall) {
        Task {
            do {
                try await AppStore.sync()
                let unlocked = await hasVerifiedProPassEntitlement()
                resolve(
                    call,
                    unlocked: unlocked,
                    status: "success",
                    errorMessage: unlocked ? nil : "No previous Pro Pass purchase was found for this Apple ID."
                )
            } catch {
                resolve(call, unlocked: false, status: "error", errorMessage: error.localizedDescription)
            }
        }
    }

    private func hasVerifiedProPassEntitlement() async -> Bool {
        for await entitlement in Transaction.currentEntitlements {
            guard let transaction = try? checkVerified(entitlement) else {
                continue
            }

            if transaction.productID == proPassProductId && transaction.revocationDate == nil {
                return true
            }
        }

        return false
    }

    private func checkVerified<T>(_ result: VerificationResult<T>) throws -> T {
        switch result {
        case .unverified:
            throw StoreKitBridgeError.failedVerification
        case .verified(let signedType):
            return signedType
        }
    }

    private func resolve(_ call: CAPPluginCall, unlocked: Bool, status: String, errorMessage: String? = nil) {
        var payload: [String: Any] = [
            "proPassUnlocked": unlocked,
            "source": "store",
            "status": status,
        ]

        if let errorMessage {
            payload["errorMessage"] = errorMessage
        }

        call.resolve(payload)
    }
}

private enum StoreKitBridgeError: LocalizedError {
    case failedVerification

    var errorDescription: String? {
        switch self {
        case .failedVerification:
            return "The App Store transaction could not be verified."
        }
    }
}

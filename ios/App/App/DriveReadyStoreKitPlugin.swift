import Capacitor
import Foundation
import StoreKit

@objc(DriveReadyStoreKitPlugin)
public class DriveReadyStoreKitPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "DriveReadyStoreKitPlugin"
    public let jsName = "DriveReadyStoreKit"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getEntitlements", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getProPassProduct", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "purchaseProPass", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "restorePurchases", returnType: CAPPluginReturnPromise),
    ]

    private let proPassProductId = "driveready_pro_pass_lifetime"
    private let missingProductMessage = "Pro Pass is temporarily unavailable. Please try again later."
    private var transactionUpdatesTask: Task<Void, Never>?

    public override func load() {
        super.load()
        startTransactionUpdatesListener()
    }

    deinit {
        transactionUpdatesTask?.cancel()
    }

    @objc func getEntitlements(_ call: CAPPluginCall) {
        Task {
            let unlocked = await hasVerifiedProPassEntitlement()
            resolve(call, unlocked: unlocked, status: "success")
        }
    }

    @objc func getProPassProduct(_ call: CAPPluginCall) {
        Task {
            do {
                guard let product = try await loadProPassProduct() else {
                    call.resolve([
                        "available": false,
                        "productId": proPassProductId,
                        "displayPrice": "$4.99",
                        "errorMessage": missingProductMessage,
                    ])
                    return
                }

                call.resolve([
                    "available": true,
                    "productId": product.id,
                    "displayName": product.displayName,
                    "displayPrice": product.displayPrice,
                ])
            } catch {
                call.resolve([
                    "available": false,
                    "productId": proPassProductId,
                    "displayPrice": "$4.99",
                    "errorMessage": error.localizedDescription,
                ])
            }
        }
    }

    @objc func purchaseProPass(_ call: CAPPluginCall) {
        let productId = call.getString("productId") ?? proPassProductId

        Task {
            do {
                guard let product = try await loadProduct(id: productId) else {
                    resolve(call, unlocked: false, status: "error", errorMessage: missingProductMessage)
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
                if await hasVerifiedProPassEntitlement() {
                    resolve(call, unlocked: true, status: "success")
                    return
                }

                resolve(call, unlocked: false, status: "error", errorMessage: error.localizedDescription)
            }
        }
    }

    private func startTransactionUpdatesListener() {
        guard transactionUpdatesTask == nil else {
            return
        }

        transactionUpdatesTask = Task {
            for await update in Transaction.updates {
                guard !Task.isCancelled else {
                    return
                }

                guard let transaction = try? checkVerified(update) else {
                    continue
                }

                if transaction.productID == proPassProductId {
                    await transaction.finish()
                }
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

    private func loadProPassProduct() async throws -> Product? {
        try await loadProduct(id: proPassProductId)
    }

    private func loadProduct(id: String) async throws -> Product? {
        try await Product.products(for: [id]).first
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

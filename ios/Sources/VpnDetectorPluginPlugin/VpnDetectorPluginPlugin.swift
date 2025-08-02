import Foundation
import Capacitor

/**
 * VPN Detector Plugin for Capacitor
 * Detects VPN connections on iOS devices
 */
@objc(VpnDetectorPluginPlugin)
public class VpnDetectorPluginPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "VpnDetectorPluginPlugin"
    public let jsName = "VpnDetectorPlugin"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "isVpnActive", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = VpnDetectorPlugin()

    @objc func isVpnActive(_ call: CAPPluginCall) {
        let isActive = implementation.isVpnActive()
        call.resolve([
            "value": isActive
        ])
    }
}

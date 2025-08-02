export interface VpnDetector {
  /**
   * Check if VPN is currently active on the device
   */
  isVpnActive(): Promise<{ value: boolean }>;
}

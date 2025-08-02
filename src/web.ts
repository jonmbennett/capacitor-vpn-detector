import { WebPlugin } from '@capacitor/core';

import type { VpnDetector } from './definitions';

export class VpnDetectorWeb extends WebPlugin implements VpnDetector {
  async isVpnActive(): Promise<{ value: boolean }> {
    throw this.unimplemented('VPN detection is not available on web platform');
  }
}

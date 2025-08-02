import { WebPlugin } from '@capacitor/core';

import type { VpnDetectorPlugin } from './definitions';

export class VpnDetectorWeb extends WebPlugin implements VpnDetectorPlugin {
  async isVpnActive(): Promise<{ value: boolean }> {
    throw this.unimplemented('VPN detection is not available on web platform');
  }
}

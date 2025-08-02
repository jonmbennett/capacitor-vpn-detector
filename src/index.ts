import { registerPlugin } from '@capacitor/core';

import type { VpnDetector } from './definitions';

const VpnDetector = registerPlugin<VpnDetector>('VpnDetectorPlugin', {
  web: () => import('./web').then((m) => new m.VpnDetectorWeb()),
});

export * from './definitions';
export { VpnDetector };

# capacitor-vpn-detector

Capacitor plugin to detect VPN connections on Android and iOS.

## Install

```bash
npm install capacitor-vpn-detector
npx cap sync
```

## API

<docgen-index>

* [`isVpnActive()`](#isvpnactive)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isVpnActive()

```typescript
isVpnActive() => Promise<{ value: boolean; }>
```

Check if VPN is currently active on the device

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------

</docgen-api>

## Usage

```typescript
import { VpnDetector } from 'capacitor-vpn-detector';

const checkVpn = async () => {
  const result = await VpnDetector.isVpnActive();
  console.log('VPN is active:', result.value);
};
```

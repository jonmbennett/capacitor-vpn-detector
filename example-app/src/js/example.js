import { VpnDetectorPlugin } from 'capacitor-vpn-detector';

window.testVpnDetection = async () => {
    try {
        const result = await VpnDetectorPlugin.isVpnActive();
        const resultElement = document.getElementById("vpnResult");
        resultElement.textContent = `VPN is ${result.value ? 'active' : 'not active'}`;
        resultElement.style.color = result.value ? 'red' : 'green';
    } catch (error) {
        console.error('Error detecting VPN:', error);
        const resultElement = document.getElementById("vpnResult");
        resultElement.textContent = `Error: ${error.message}`;
        resultElement.style.color = 'orange';
    }
}

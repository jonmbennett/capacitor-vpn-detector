package com.vpn.detector.plugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import android.Manifest;

@CapacitorPlugin(
    name = "VpnDetectorPlugin",
    permissions = {
        @Permission(strings = { Manifest.permission.ACCESS_NETWORK_STATE }, alias = "network")
    }
)
public class VpnDetectorPluginPlugin extends Plugin {

    private VpnDetectorPlugin implementation;

    @Override
    public void load() {
        implementation = new VpnDetectorPlugin(getContext());
    }

    @PluginMethod
    public void isVpnActive(PluginCall call) {
        try {
            boolean isActive = implementation.isVpnActive();
            
            JSObject ret = new JSObject();
            ret.put("value", isActive);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Error detecting VPN status", e);
        }
    }
}

# Custom Transports

You can bring your own implementation (or other's addons) of [`MultiplayerPeer`](https://docs.godotengine.org/en/stable/classes/class_multiplayerpeer.html) by using `CMNetTransportCustom`. Here's an example using WebRTC:

```gd
var webrtc := WebRTCMultiplayerPeer.new()
var transport := CMNetTransportCustom.new(webrtc)
net.transport = transport # Set Transport on CMNetManager
# Make sure debug transport is null, otherwise it'll default to that in editor
net.debug_transport = null
```
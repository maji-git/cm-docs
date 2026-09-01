# Remote Procedure Calls

Remote Procedure Calls, or RPC, are functions that can be called by other peers in the network. To create one, use the standard Godot's `@rpc` annotation before a function definition.

```gd{6}
func _input(event: InputEvent) -> void:
	if event is InputEventKey:
		if event.keycode == KEY_E and event.is_pressed():
			_hello.rpc()

@rpc("any_peer", "reliable")
func _hello() -> void:
	print("hello!")
```

*Example code, Press E to say hello!*

To retrieve the RPC sender, use Godot's `multiplayer.get_remote_sender_id()`. CM.gd also provides additional functions to retrieve the RPC's caller. For example:

```gd{8}
func _input(event: InputEvent) -> void:
	if event is InputEventKey:
		if event.keycode == KEY_E and event.is_pressed():
			_hello.rpc()

@rpc("any_peer", "reliable")
func _hello() -> void:
	print("hello from ", CM.rpc_sender_peer.peer_id)
```

*Example code, Press E to say hello... and know who sent the message!*

There are currently 2 provided CM shorthand:

- `CM.rpc_sender_id` get the RPC sender ID (same as `multiplayer.get_remote_sender_id()`)
- `CM.rpc_sender_peer` get the RPC sender's CM Peer

For more details on RPC, check out Godot's [Official Documentation](https://docs.godotengine.org/en/stable/tutorials/networking/high_level_multiplayer.html#remote-procedure-calls)
# Retrieving and Processing User Inputs

To start of with this: **CM doesn't manage user inputs**. It's up to the developer to do so. Though, the most basic one is `CMPlayer.is_local` guarding. It typically looks like this:

```gd
func _physics_process(delta: float) -> void:
	if cm_plr.is_local:
		_process_controls(delta)
```

> `cm_plr` is the variable you assigned `CMPlayer` to. If you haven't assigned `CMPlayer` to your node yet, check out [this section](/start-here/player-spawning/)
# Player Management

This page will guide you through how to manage players inside the game.

## Adding a player

Check out [Player Spawning](/start-here/player-spawning/) to learn how to spawn the player.

## Removing a player

To remove a player, call `CMPlayerManager.remove_player()`. This will make a request to the server to remove the player for all clients.

```gd
player.remove_player(plr)
```

## Retrieving Players

### Retrieving All Players

To retrieve all players, get the `CMPlayerManager.players` variable.

```gd
var players: Array[CMPlayer] = player.players
```

### Retrieving Player count

To retrieve the player count, get the `CMPlayerManager.player_count` variable.

```gd
var player_count: int = player.player_count
```

### Retrieving All Players

To retrieve all players, get the `CMPlayerManager.players` variable.

```gd
var players: Array[CMPlayer] = player.players
```

### Get Player by ID

To get player by ID, call the `CMPlayerManager.get_player_by_id(id: int)` function.

```gd
var player_one := players.get_player_by_id(1)
```
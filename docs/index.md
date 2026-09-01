![Header](/assets/header.png)

# Welcome to CM.gd!

Welcome to CM.gd! CM.gd is a multiplayer game framework that abstracts Godot's multiplayer layer as objects and lets you create single-player, Couch Co-op multiplayer, and networked multiplayer from a single Godot Project. Inspired by Photon and Mirror Networking.

::: warning ⚠️ This project is still in it's early stages!
Due to the framework being in it's early stages. The architecture design of this framework might change, so **I don't recommend you using this in big projects yet**. Though, you can try it out in your experimental projects!!
:::

::: info Godot Version Support
This framework is only tested and works in Godot 4.7 and up
:::

## Features

### Flexible Player Joining Mechanism

This framework's player management allows for flexible player joining mechanisms. Want to join from controllers? Sure. Want to join over the network? Sure. Or mix and match them together in the same game, you can do that! (Think of Plate Up! or Overcooked's Multiplayer. If you have ever played it)

### Multiplayer Organized into Nodes

This framework's node and objects are designed in an object-oriented manner. You can create a `CMSession` and configure it's player and network management features right away in the editor.

### Automatic Player/Peer Management

From The network connection process, peer/player replications, to cleanup; are done automatically by the framework.

### Built on top of Godot's Multiplayer APIs

The framework's networking is based on Godot's Multiplayer APIs. Which means you can use the standard multiplayer APIs, multiplayer peers extensions, and other multiplayer addons with it (eg. netfox, Tube, GodotSteam, etc.).

Also checkout [netfox](https://store.godotengine.org/asset/foxssake/netfox/)! I'm sure this framework goes well with the netfox addon.

---

Jump to the [Getting Started](/start-here/getting-started/) to start using the framework!
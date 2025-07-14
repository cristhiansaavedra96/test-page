ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event;

  // /sendcoords (broadcast)
    event.register(
        Commands.literal('sendcoords')
        .executes(ctx => {
            const player = ctx.source.player;
            const pos = player.blockPosition();
            const name = player.getName().getString();                
            const message = `§a${name} coordinates: §eX: ${pos.x}, Y: ${pos.y}, Z: ${pos.z}`;

            player.server.getPlayerList().getPlayers().forEach(p => {
                p.sendSystemMessage(Component.literal(`§b${message}`));
            });

            return 1;
        })
    );
  });

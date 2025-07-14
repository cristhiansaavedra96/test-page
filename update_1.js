// Importa Text para mayor compatibilidad
const { Text } = require('net.minecraft.network.chat')

ServerEvents.playerLoggedIn(event => {
  const player = event.player

  if (player.persistentData.seenUpdate_v1_1_0) return

  const book = {
    title: "🔧 Actualización v1.1.0",
    author: "Equipo del Servidor",
    pages: [
      Text.of(
        "⚠️ Cambios de Balanceo:\n\n" +
        "- Se deshabilitó el crafteo del Digital Miner.\n" +
        "- Se deshabilitó el crafteo de los Jetpacks.\n\n"
      ).string
    ]
  }

  player.openBook(book)
  player.persistentData.seenUpdate_v1_1_0 = true
})
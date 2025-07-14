// Esto elimina algunos materiales que se usan para armas demasiado poderosas
ServerEvents.recipes(event => {
  const brokenMaterials = [
    'silentgear:nether_star',
    'silentgear:dragon_scale',
    'silentgear:blaze_gold_ingot',
    'silentgear:azure_electrum_ingot',
    'silentgear:crimson_steel_ingot'
  ]

  brokenMaterials.forEach(material => {
    event.remove({ input: material })
  })
})

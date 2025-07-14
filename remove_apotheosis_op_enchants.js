// Elimina los libros de encantamientos por encima del nivel vanilla
ServerEvents.recipes(event => {
  const opEnchantments = [
    'minecraft:sharpness',
    'minecraft:unbreaking',
    'minecraft:efficiency',
    'minecraft:fortune',
    'minecraft:power',
    'minecraft:protection',
    'minecraft:looting'
  ]

  // Elimina recetas de encantamientos con niveles superiores al vanilla
  opEnchantments.forEach(enchant => {
    for (let i = 6; i <= 10; i++) {
      event.remove({ output: `apotheosis:enchanted_book_${enchant}_${i}` })
    }
  })
})

// Elimina algunos glifos muy OP de Ars Nouveau
ServerEvents.recipes(event => {
  const glyphs = [
    'ars_nouveau:glyph_amplify',
    'ars_nouveau:glyph_blink',
    'ars_nouveau:glyph_explosion',
    'ars_nouveau:glyph_lightning',
    'ars_nouveau:glyph_flight',
  ]

  glyphs.forEach(glyph => {
    event.remove({ output: glyph })
  })
})
